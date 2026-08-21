"use client";

import Image from "next/image";
import Link from "next/link";
import { AlertCircle, BadgeCheck, Bell, CheckCheck, CheckCircle2, Clock3, Link2, LogOut, Menu, MessageCircle, Store, UsersRound, ShoppingCart, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/components/layout/CartContext";
import { useSession } from "@/components/auth/SessionContext";
import { getDashboardNavSections } from "@/lib/dashboard-access";
import { cn } from "@/lib/utils";
import { dashboardIcons } from "./icons";
import { useServiceConnections, type ServiceId } from "./ServiceConnections";
import { UserAvatar } from "./UserAvatar";
import { logoutSession } from "@/lib/auth";

type HeaderPanel = "notifications" | "messages" | null;
type HeaderFeedItem = {
  id: string;
  title: string;
  body: string;
  time: string;
  href: string;
  unread?: boolean;
};

const notificationsStorageKey = "noogym:dashboard-notifications-read";
const messagesStorageKey = "noogym:dashboard-messages-read";

function readStringArray(key: string) {
  try {
    const stored = window.localStorage.getItem(key);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    window.localStorage.removeItem(key);
    return [];
  }
}

function roleLabel(role?: string) {
  return {
    ADMIN: "Administrador Noogym",
    GYM_MANAGER: "Gestor de ginásio",
    MEMBER: "Membro Noogym",
    PERSONAL_TRAINER: "Personal trainer",
    SELLER: "Vendedor Noogym Market",
    USER: "Membro Noogym",
    member: "Membro Noogym",
  }[role ?? ""] ?? "Membro Noogym";
}

function firstNameOf(name: string) {
  return name.trim().split(/\s+/)[0] || "Utilizador";
}

export function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<HeaderPanel>(null);
  const [readNotifications, setReadNotifications] = useState<string[]>([]);
  const [readMessages, setReadMessages] = useState<string[]>([]);
  const pathname = usePathname();
  const router = useRouter();
  const { count } = useCart();
  const { loading, user } = useSession();
  const visibleNavSections = getDashboardNavSections(user);
  const { connections } = useServiceConnections();
  const serviceHref = "/dashboard/perfil?tab=perfis-e-vinculos";
  const connectedCount = Object.values(connections).filter((connection) => connection.status === "ACTIVE").length;
  const attentionCount = Object.values(connections).filter((connection) => ["PENDING", "ACTION_REQUIRED", "SUSPENDED"].includes(connection.status)).length;
  const displayName = user?.name?.trim() || (loading ? "..." : "Utilizador");
  const firstName = firstNameOf(displayName);
  const accountLabel = roleLabel(user?.role);
  const avatarUrl = user?.avatarUrl;
  const serviceItems: { id: ServiceId; hash: string; Icon: typeof Link2 }[] = [
    { id: "gym", hash: "vincular-academia", Icon: Link2 },
    { id: "personal", hash: "personal", Icon: BadgeCheck },
    { id: "market", hash: "vendedor", Icon: Store },
  ];
  const notificationItems = useMemo<HeaderFeedItem[]>(() => {
    const serviceNotifications = Object.values(connections)
      .filter((connection) => ["PENDING", "ACTION_REQUIRED", "SUSPENDED"].includes(connection.status))
      .map((connection) => ({
        id: `service-${connection.id}-${connection.status}`,
        title: connection.displayName,
        body: connection.detail,
        time: "Agora",
        href: serviceHref,
        unread: true,
      }));

    return [
      ...serviceNotifications,
      ...(count
        ? [{
          id: "cart-pending",
          title: "Carrinho guardado",
          body: `${count} item${count === 1 ? "" : "s"} aguardam a finalização da compra.`,
          time: "Hoje",
          href: "/carrinho",
          unread: true,
        }]
        : []),
      {
        id: "account-secure",
        title: "Sessão validada",
        body: `${firstName}, a sua conta está ativa neste dispositivo.`,
        time: "Agora",
        href: "/dashboard/seguranca",
        unread: false,
      },
    ];
  }, [connections, count, firstName, serviceHref]);
  const messageItems = useMemo<HeaderFeedItem[]>(() => [
    {
      id: "support-welcome",
      title: "Equipa Noogym",
      body: `${firstName}, bem-vindo. Qualquer dúvida sobre conta, plano ou compras pode ser tratada aqui.`,
      time: "Agora",
      href: "/dashboard/configuracoes",
      unread: true,
    },
    {
      id: "market-support",
      title: "Suporte Noogym Market",
      body: "Quando fizer uma compra, as atualizações do pedido aparecem nas notificações e nesta caixa.",
      time: "Hoje",
      href: "/dashboard/pedidos",
      unread: false,
    },
    ...(connections.gym.status === "ACTIVE"
      ? [{
        id: "gym-message",
        title: connections.gym.displayName,
        body: "O seu vínculo com o ginásio está ativo. Pode acompanhar check-ins e benefícios no dashboard.",
        time: "Hoje",
        href: connections.gym.href,
        unread: true,
      }]
      : []),
  ], [connections.gym.displayName, connections.gym.href, connections.gym.status, firstName]);
  const unreadNotificationCount = notificationItems.filter((item) => item.unread && !readNotifications.includes(item.id)).length;
  const unreadMessageCount = messageItems.filter((item) => item.unread && !readMessages.includes(item.id)).length;

  useEffect(() => {
    setReadNotifications(readStringArray(notificationsStorageKey));
    setReadMessages(readStringArray(messagesStorageKey));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(notificationsStorageKey, JSON.stringify(readNotifications));
  }, [readNotifications]);

  useEffect(() => {
    window.localStorage.setItem(messagesStorageKey, JSON.stringify(readMessages));
  }, [readMessages]);

  useEffect(() => {
    setOpenPanel(null);
  }, [pathname]);

  async function handleLogout() {
    await logoutSession();
    setMenuOpen(false);
    router.replace("/login");
  }

  function markNotificationRead(id: string) {
    setReadNotifications((current) => current.includes(id) ? current : [...current, id]);
  }

  function markMessageRead(id: string) {
    setReadMessages((current) => current.includes(id) ? current : [...current, id]);
  }

  return (
    <>
      <header className="fixed left-0 top-0 z-40 h-[72px] w-full border-b border-white/10 bg-black/80 backdrop-blur-xl lg:left-[260px] lg:w-[calc(100%-260px)]">
        <div className="flex h-full min-w-0 items-center justify-between gap-2 px-4 sm:gap-4 sm:px-5 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 lg:hidden">
            <button onClick={() => setMenuOpen(true)} className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 text-white/82 transition hover:bg-white/8 hover:text-limebrand" aria-label="Abrir menu do dashboard">
              <Menu className="h-5 w-5" />
            </button>
            <Link href="/dashboard/resumo" className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
              <Image src="/assets/logo.png" alt="Noogym" width={42} height={28} className="h-6 w-auto shrink-0 sm:h-7" />
              <span className="truncate text-xl font-bold">noogym</span>
            </Link>
          </div>

          <div className="hidden min-w-0 items-center gap-2 md:flex">
            <Link
              href={serviceHref}
              className="hidden h-10 items-center gap-2 rounded-md border border-limebrand/25 bg-limebrand/8 px-3 text-sm font-semibold text-limebrand transition hover:border-limebrand/60 hover:bg-limebrand/12 md:flex xl:hidden"
            >
              <UsersRound className="h-4 w-4" />
              Perfis · {connectedCount} ativo{connectedCount === 1 ? "" : "s"}
              {attentionCount ? <span className="grid h-5 min-w-5 place-items-center rounded-full bg-amber-300 px-1 text-[10px] font-black text-black">{attentionCount}</span> : null}
            </Link>
            <div className="hidden items-center gap-2 xl:flex">
              <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-white/42">Perfis</span>
              {serviceItems.map(({ id, hash, Icon }) => {
                const connection = connections[id];
                const active = connection.status === "ACTIVE";
                const pending = connection.status === "PENDING";
                const needsAction = connection.status === "ACTION_REQUIRED" || connection.status === "SUSPENDED";
                const StatusIcon = active ? CheckCircle2 : pending ? Clock3 : needsAction ? AlertCircle : null;
                const label = active ? connection.displayName : `${connection.displayName}${connection.status === "NOT_CONNECTED" ? "" : ` · ${connection.detail}`}`;
                return (
                  <Link
                    key={id}
                    href={active ? connection.href : `${serviceHref}#${hash}`}
                    className={cn(
                      "inline-flex h-10 max-w-[190px] items-center gap-2 rounded-md border px-3 text-xs font-semibold transition",
                      active && "border-limebrand/35 bg-limebrand/8 text-limebrand hover:border-limebrand/65",
                      pending && "border-sky-400/30 bg-sky-400/8 text-sky-300 hover:border-sky-300/60",
                      needsAction && "border-amber-300/35 bg-amber-300/8 text-amber-200 hover:border-amber-200/65",
                      connection.status === "NOT_CONNECTED" && "border-white/10 bg-white/[0.035] text-white/76 hover:border-limebrand/45 hover:text-limebrand",
                    )}
                    title={`${connection.displayName}: ${connection.detail}`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{label}</span>
                    {StatusIcon ? <StatusIcon className="h-3.5 w-3.5 shrink-0" /> : null}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2 md:gap-3">
            <Link href={serviceHref} className="relative grid h-10 w-10 place-items-center rounded-md text-white/80 transition hover:bg-white/8 hover:text-limebrand md:hidden" aria-label="Gerir perfis e vínculos">
              <UsersRound className="h-5 w-5" />
              {attentionCount ? <span className="absolute mt-[-28px] ml-7 grid h-4 min-w-4 place-items-center rounded-full bg-amber-300 px-1 text-[9px] font-black text-black">{attentionCount}</span> : null}
            </Link>
            <Link href="/carrinho" className="relative grid h-10 w-10 place-items-center rounded-md text-white/80 transition hover:bg-white/8 hover:text-limebrand" aria-label="Abrir carrinho">
              <ShoppingCart className="h-5 w-5" />
              {count ? <span className="absolute right-1 top-0 grid h-5 min-w-5 place-items-center rounded-full bg-limebrand px-1 text-[11px] font-black text-black">{count}</span> : null}
            </Link>
            <HeaderFeedButton
              active={openPanel === "notifications"}
              count={unreadNotificationCount}
              icon={Bell}
              items={notificationItems}
              label="Notificações"
              onMarkAllRead={() => setReadNotifications(notificationItems.map((item) => item.id))}
              onMarkRead={markNotificationRead}
              onToggle={() => setOpenPanel((current) => current === "notifications" ? null : "notifications")}
              readIds={readNotifications}
            />
            <HeaderFeedButton
              active={openPanel === "messages"}
              className="hidden min-[460px]:grid"
              count={unreadMessageCount}
              icon={MessageCircle}
              items={messageItems}
              label="Mensagens"
              onMarkAllRead={() => setReadMessages(messageItems.map((item) => item.id))}
              onMarkRead={markMessageRead}
              onToggle={() => setOpenPanel((current) => current === "messages" ? null : "messages")}
              readIds={readMessages}
            />
            <div className="mx-1 hidden h-8 w-px bg-white/10 sm:block" />
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Olá, {firstName}</p>
              <p className="text-xs text-white/60">{accountLabel}</p>
            </div>
            <UserAvatar alt={displayName} className="hidden sm:block" src={avatarUrl} />
          </div>
        </div>
      </header>
      {menuOpen ? (
        <div className="fixed inset-0 z-[70] bg-black/72 backdrop-blur-md lg:hidden">
          <div className="flex h-full w-[min(100vw,21rem)] flex-col border-r border-white/10 bg-[#061012]/96 shadow-2xl">
            <div className="flex h-[72px] items-center justify-between gap-3 border-b border-white/10 px-5">
              <Link href="/dashboard/resumo" onClick={() => setMenuOpen(false)} className="flex min-w-0 items-center gap-3">
                <Image src="/assets/logo.png" alt="Noogym" width={44} height={28} className="h-7 w-auto shrink-0" />
                <span className="truncate text-xl font-bold">noogym</span>
              </Link>
              <button onClick={() => setMenuOpen(false)} className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 text-white/82" aria-label="Fechar menu do dashboard">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-5">
              {visibleNavSections.map((section) => (
                <div key={section.label} className="mb-7">
                  <p className="mb-3 px-3 text-xs uppercase tracking-wide text-white/58">{section.label}</p>
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const Icon = dashboardIcons[item.icon];
                      const active = pathname === item.href || (item.href !== "/dashboard/resumo" && pathname.startsWith(item.href));
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={cn(
                            "flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium text-white/86 transition",
                            active ? "bg-limebrand text-black shadow-glow" : "hover:bg-white/8 hover:text-white",
                          )}
                        >
                          <Icon className="h-[18px] w-[18px]" />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
            <div className="border-t border-white/10 p-4">
              <div className="mb-3 flex items-center gap-3 rounded-md border border-white/8 bg-white/[0.035] p-3">
                <UserAvatar alt={displayName} src={avatarUrl} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{displayName}</p>
                  <p className="truncate text-xs text-white/58">{accountLabel}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex h-11 w-full items-center gap-3 rounded-md px-3 text-sm font-semibold text-white/78 transition hover:bg-red-500/10 hover:text-red-200"
              >
                <LogOut className="h-[18px] w-[18px]" />
                <span>Sair da conta</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function HeaderFeedButton({
  active,
  className,
  count,
  icon: Icon,
  items,
  label,
  onMarkAllRead,
  onMarkRead,
  onToggle,
  readIds,
}: {
  active: boolean;
  className?: string;
  count: number;
  icon: typeof Bell;
  items: HeaderFeedItem[];
  label: string;
  onMarkAllRead: () => void;
  onMarkRead: (id: string) => void;
  onToggle: () => void;
  readIds: string[];
}) {
  return (
    <div className={cn("relative", className)}>
      <button
        aria-expanded={active}
        aria-label={label}
        className={cn(
          "relative grid h-10 w-10 place-items-center rounded-md text-white/80 transition hover:bg-white/8 hover:text-limebrand",
          active && "bg-white/8 text-limebrand",
        )}
        onClick={onToggle}
        type="button"
      >
        <Icon className="h-5 w-5" />
        {count ? (
          <span className="absolute right-1 top-0 grid h-5 min-w-5 place-items-center rounded-full bg-limebrand px-1 text-[11px] font-black text-black">
            {count}
          </span>
        ) : null}
      </button>

      {active ? (
        <div className="fixed left-3 right-3 top-16 z-[100] overflow-hidden rounded-md border border-white/20 bg-[#050708] text-left text-white shadow-[0_28px_90px_rgba(0,0,0,0.78)] ring-1 ring-black/80 sm:absolute sm:left-auto sm:right-0 sm:top-12 sm:w-[min(22rem,calc(100vw-1.5rem))]">
          <div className="flex items-center justify-between gap-3 border-b border-white/14 bg-[#080d0f] px-4 py-3">
            <div>
              <p className="text-sm font-black">{label}</p>
              <p className="mt-0.5 text-xs text-white/62">{count ? `${count} por ler` : "Tudo em dia"}</p>
            </div>
            <button
              className="inline-flex h-8 items-center gap-1.5 rounded-md border border-white/22 bg-white/[0.06] px-2.5 text-xs font-bold text-white/82 transition hover:border-limebrand/55 hover:bg-limebrand/10 hover:text-limebrand"
              onClick={onMarkAllRead}
              type="button"
            >
              <CheckCheck className="h-3.5 w-3.5" />
              Lidas
            </button>
          </div>

          <div className="max-h-[24rem] overflow-y-auto bg-[#050708] p-2">
            {items.length ? (
              items.map((item) => {
                const unread = Boolean(item.unread && !readIds.includes(item.id));

                return (
                  <Link
                    className="grid grid-cols-[auto_1fr] gap-3 rounded-md border border-white/8 bg-white/[0.035] px-3 py-3 transition hover:border-white/18 hover:bg-white/[0.07]"
                    href={item.href}
                    key={item.id}
                    onClick={() => onMarkRead(item.id)}
                  >
                    <span className={cn("mt-1 h-2.5 w-2.5 rounded-full", unread ? "bg-limebrand shadow-glow" : "bg-white/18")} />
                    <span className="min-w-0">
                      <span className="flex items-start justify-between gap-3">
                        <strong className="line-clamp-1 text-sm">{item.title}</strong>
                        <span className="shrink-0 text-[11px] font-semibold text-white/58">{item.time}</span>
                      </span>
                      <span className="mt-1 line-clamp-2 text-xs leading-5 text-white/72">{item.body}</span>
                    </span>
                  </Link>
                );
              })
            ) : (
              <div className="px-4 py-8 text-center text-sm text-white/68">
                Nenhum item novo.
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

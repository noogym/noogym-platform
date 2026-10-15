"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ElementType, PropsWithChildren } from "react";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  CreditCard,
  Heart,
  Headphones,
  LockKeyhole,
  MapPin,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  Smartphone,
  Tag,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import { products, type Product } from "@/data/products";
import { getApiErrorMessage, readApiPayload } from "@/lib/api";
import { demoMode, readUserSession } from "@/lib/auth";
import { cn, formatKz } from "@/lib/utils";
import { type DeliveryMethodId, type PaymentMethodId, useCart } from "@/components/layout/CartContext";

const productDetails: Record<string, string> = {
  whey: "Sabor: Chocolate",
  pre: "Sabor: Fruit Punch",
  creatina: "Variação: Padrão",
  bcaa: "Formato: 200 cápsulas",
  shaker: "Capacidade: 700ml",
  belt: "Material: Couro",
  isolate: "Sabor: Baunilha",
  shirt: "Tamanho: M",
};

const recommendedIds = ["whey", "pre", "shaker", "belt"];

const deliveryOptions: Record<DeliveryMethodId, { title: string; description: string; price: number }> = {
  rapida: { title: "Entrega rápida em Luanda", description: "Receba seus produtos em até 24h em Luanda.", price: 1500 },
  expressa: { title: "Entrega expressa", description: "Receba em 1 dia útil.", price: 2500 },
};

const paymentOptions: Record<PaymentMethodId, { title: string; description: string; icon: ElementType; badge?: string }> = {
  delivery: { title: "Pagamento na entrega", description: "Pague ao receber seu pedido.", icon: PackageCheck },
  multicaixa: { title: "Multicaixa Express", description: "Pague com segurança via Multicaixa.", icon: Smartphone, badge: "MCX" },
  card: { title: "Cartão de crédito/débito", description: "Visa, Mastercard e mais.", icon: CreditCard, badge: "VISA ••" },
};

function couponDiscount(subtotal: number, coupon: { percent: number } | null) {
  if (!coupon) return 0;
  return Math.round(subtotal * coupon.percent);
}

function productDetail(product: Product) {
  return productDetails[product.id] ?? product.category;
}

function productByIds(ids: string[]) {
  return ids
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));
}

function SectionCard({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={cn("rounded-lg border border-white/60 bg-white/[0.025]", className)}>
      {children}
    </section>
  );
}

function StatusStock() {
  return (
    <p className="mt-3 flex items-center gap-2 text-sm font-bold text-limebrand">
      <CheckCircle2 className="h-4 w-4 fill-limebrand text-black" />
      Em estoque
    </p>
  );
}

function OrderSummaryCard() {
  const { count, coupon, items } = useCart();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = couponDiscount(subtotal, coupon);
  const total = Math.max(subtotal - discount, 0);

  return (
    <SectionCard className="p-6">
      <h2 className="text-xl font-black">Resumo do pedido</h2>
      <div className="mt-7 space-y-5 text-sm">
        <div className="flex items-center justify-between gap-4">
          <span className="text-white/76">Subtotal ({count} itens)</span>
          <strong>{formatKz(subtotal)}</strong>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-white/76">Descontos</span>
          <strong className="text-limebrand">- {formatKz(discount)}</strong>
        </div>
        {coupon ? <p className="text-xs font-bold text-limebrand">Cupom {coupon.code} aplicado</p> : null}
      </div>
      <div className="mt-7 border-t border-white/45 pt-7">
        <div className="flex items-center justify-between gap-4">
          <strong className="text-xl">Total</strong>
          <strong className="text-3xl">{formatKz(total)}</strong>
        </div>
      </div>
    </SectionCard>
  );
}

function DeliveryOption({ selected, title, description, price, icon = "truck", onSelect }: { selected: boolean; title: string; description: string; price: number; icon?: "truck" | "phone"; onSelect: () => void }) {
  const Icon = icon === "truck" ? Truck : Smartphone;

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "grid w-full grid-cols-[auto_auto_minmax(0,1fr)] items-start gap-3 rounded-md border p-3 text-left transition sm:grid-cols-[auto_auto_minmax(0,1fr)_auto] sm:items-center sm:p-4",
        selected ? "border-limebrand bg-limebrand/8" : "border-white/55 bg-white/[0.02] hover:border-white/80",
      )}
    >
      <span className={cn("grid h-6 w-6 place-items-center rounded-full border", selected ? "border-limebrand" : "border-white/50")}>
        {selected ? <span className="h-3 w-3 rounded-full bg-limebrand" /> : null}
      </span>
      <Icon className={cn("h-5 w-5", selected ? "text-limebrand" : "text-white/62")} />
      <span className="min-w-0">
        <span className="block font-black">{title}</span>
        <span className="mt-1 block text-sm leading-5 text-white/58">{description}</span>
      </span>
      <strong className="col-start-3 whitespace-nowrap sm:col-start-auto">{formatKz(price)}</strong>
    </button>
  );
}

function PaymentOption({ selected, title, description, icon, badge, onSelect }: { selected: boolean; title: string; description: string; icon: ElementType; badge?: string; onSelect: () => void }) {
  const Icon = icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "grid w-full grid-cols-[auto_auto_minmax(0,1fr)] items-start gap-3 rounded-md border p-3 text-left transition sm:grid-cols-[auto_auto_minmax(0,1fr)_auto] sm:items-center sm:p-4",
        selected ? "border-limebrand bg-limebrand/8" : "border-white/55 bg-white/[0.02] hover:border-white/80",
      )}
    >
      <span className={cn("grid h-6 w-6 place-items-center rounded-full border", selected ? "border-limebrand" : "border-white/50")}>
        {selected ? <span className="h-3 w-3 rounded-full bg-limebrand" /> : null}
      </span>
      <Icon className={cn("h-5 w-5", selected ? "text-limebrand" : "text-white/62")} />
      <span className="min-w-0">
        <span className="block font-black">{title}</span>
        <span className="mt-1 block text-sm leading-5 text-white/58">{description}</span>
      </span>
      {badge ? <strong className="col-start-3 w-fit whitespace-nowrap rounded-full bg-limebrand/20 px-2 py-1 text-xs text-limebrand sm:col-start-auto">{badge}</strong> : null}
    </button>
  );
}

function CouponCard() {
  const { applyCoupon, clearCoupon, coupon } = useCart();
  const [code, setCode] = useState(coupon?.code ?? "");
  const [message, setMessage] = useState(coupon ? `Cupom ${coupon.code} aplicado com 10% de desconto.` : "");

  function handleApply() {
    const result = applyCoupon(code);
    setMessage(result.message);
  }

  function handleClear() {
    clearCoupon();
    setCode("");
    setMessage("");
  }

  return (
    <SectionCard className="p-6">
      <h2 className="font-black">Cupom de desconto</h2>
      <div className="mt-5 grid gap-2 min-[380px]:grid-cols-[1fr_auto]">
        <input value={code} onChange={(event) => setCode(event.target.value)} className="h-11 rounded-md border border-white/55 bg-transparent px-4 text-sm outline-none placeholder:text-white/36 focus:border-limebrand" placeholder="Digite seu cupom" />
        {coupon ? (
          <button onClick={handleClear} className="rounded-md border border-white/55 px-5 text-sm font-bold hover:border-limebrand hover:text-limebrand">Remover</button>
        ) : (
          <button onClick={handleApply} className="rounded-md border border-white/55 px-5 text-sm font-bold hover:border-limebrand hover:text-limebrand">Aplicar</button>
        )}
      </div>
      {message ? <p className={cn("mt-3 text-sm font-bold", coupon ? "text-limebrand" : "text-white/58")}>{message}</p> : null}
    </SectionCard>
  );
}

function SecureFootnote() {
  return (
    <p className="mt-4 flex items-center justify-center gap-2 text-xs text-white/38">
      <LockKeyhole className="h-4 w-4 text-limebrand" />
      Ambiente seguro e criptografado
    </p>
  );
}

function PaymentCard({ action }: { action: React.ReactNode }) {
  const { paymentMethod, setPaymentMethod } = useCart();

  return (
    <SectionCard className="p-6">
      <h2 className="font-black">Formas de pagamento</h2>
      <p className="mt-4 flex items-center gap-2 text-sm font-bold text-limebrand">
        <ShieldCheck className="h-4 w-4" />
        Pagamento 100% seguro
      </p>
      <div className="mt-5 space-y-3">
        {(Object.keys(paymentOptions) as PaymentMethodId[]).map((id) => (
          <PaymentOption
            key={id}
            selected={paymentMethod === id}
            title={paymentOptions[id].title}
            description={paymentOptions[id].description}
            icon={paymentOptions[id].icon}
            badge={paymentOptions[id].badge}
            onSelect={() => setPaymentMethod(id)}
          />
        ))}
      </div>
      <div className="mt-6">{action}</div>
      <SecureFootnote />
    </SectionCard>
  );
}

function RecommendationCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="rounded-lg border border-white/60 bg-white/[0.025] p-3">
      <div className="relative aspect-[1.2/1] overflow-hidden rounded-md bg-black">
        <Image src={product.image} alt={product.name} fill className="object-contain p-2" />
        <button className="absolute right-3 top-3 rounded-md text-white/64 hover:text-limebrand" aria-label={`Adicionar ${product.name} aos favoritos`}>
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <h3 className="mt-3 min-h-12 text-sm font-black leading-6">{product.name}</h3>
      <p className="mt-2 text-sm">
        <span className="text-yellow-400">★</span> {product.rating} <span className="text-white/50">({product.reviews})</span>
      </p>
      <strong className="mt-3 block text-lg">{formatKz(product.price)}</strong>
      <button onClick={() => addItem(product)} className="mt-4 h-11 w-full rounded-md bg-limebrand px-4 text-sm font-black text-black transition hover:bg-limebrand2">
        Adicionar
      </button>
    </article>
  );
}

function BenefitsStrip() {
  const benefits = [
    { icon: Truck, title: "Entrega rápida", text: "Receba seus produtos em até 24h em Luanda." },
    { icon: CreditCard, title: "Parcelamento fácil", text: "Parcele em até 6x sem juros no cartão." },
    { icon: Tag, title: "Descontos exclusivos", text: "Ofertas especiais para membros Noogym." },
    { icon: Headphones, title: "Suporte dedicado", text: "Estamos prontos para te ajudar sempre." },
  ];

  return (
    <SectionCard className="mt-16 p-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="grid grid-cols-[auto_1fr] gap-4">
            <benefit.icon className="h-9 w-9 text-limebrand" />
            <div>
              <h3 className="font-black">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/58">{benefit.text}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function EmptyCart({ marketplaceHref }: { marketplaceHref: string }) {
  return (
    <SectionCard className="p-8 text-center">
      <h2 className="text-2xl font-black">O seu carrinho está vazio.</h2>
      <p className="mt-3 text-white/58">Adicione produtos do marketplace para continuar a compra.</p>
      <Link href={marketplaceHref} className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-limebrand px-6 font-black text-black">
        Explorar Marketplace
      </Link>
    </SectionCard>
  );
}

function CartItemRow({ item }: { item: Product & { qty: number } }) {
  const { decrementItem, incrementItem, removeItem } = useCart();
  const subtotal = item.price * item.qty;

  return (
    <div className="grid gap-4 border-t border-white/12 p-4 sm:p-5 md:grid-cols-[1.5fr_0.65fr_0.75fr_0.65fr_2rem] md:items-center">
      <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 sm:grid-cols-[6.75rem_minmax(0,1fr)] sm:gap-5">
        <div className="relative h-24 overflow-hidden rounded-md bg-black sm:h-28">
          <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
        </div>
        <div className="min-w-0 py-1">
          <h3 className="text-sm font-black leading-5 sm:text-base sm:leading-6">{item.name}</h3>
          <p className="mt-2 text-sm text-white/56">{productDetail(item)}</p>
          <StatusStock />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 md:block">
        <span className="text-sm text-white/48 md:hidden">Preço</span>
        <strong>{formatKz(item.price)}</strong>
      </div>
      <div className="flex items-center justify-between gap-3 md:justify-start">
        <span className="text-sm text-white/48 md:hidden">Quantidade</span>
        <div className="grid h-11 w-32 grid-cols-3 overflow-hidden rounded-md border border-white/60">
          <button type="button" onClick={() => decrementItem(item.id)} className="grid place-items-center text-white/58 transition hover:bg-white/8 hover:text-limebrand active:bg-limebrand active:text-black" aria-label={`Diminuir quantidade de ${item.name}`}>
            <Minus className="h-4 w-4" />
          </button>
          <span aria-live="polite" className="grid place-items-center font-black">{item.qty}</span>
          <button type="button" onClick={() => incrementItem(item.id)} className="grid place-items-center text-white/58 transition hover:bg-white/8 hover:text-limebrand active:bg-limebrand active:text-black" aria-label={`Aumentar quantidade de ${item.name}`}>
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 md:block">
        <span className="text-sm text-white/48 md:hidden">Subtotal</span>
        <strong>{formatKz(subtotal)}</strong>
      </div>
      <button onClick={() => removeItem(item.id)} className="grid h-9 w-9 place-items-center rounded-md text-white/62 hover:bg-white/8 hover:text-limebrand" aria-label={`Remover ${item.name}`}>
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}

function CartDeliveryCard() {
  const { deliveryMethod, setDeliveryMethod } = useCart();
  const selectedDelivery = deliveryOptions[deliveryMethod];

  return (
    <SectionCard className="p-6">
      <h2 className="font-black">Calcular entrega</h2>
      <select className="mt-5 h-11 w-full rounded-md border border-white/55 bg-ink-950 px-4 text-sm outline-none focus:border-limebrand">
        <option>Luanda</option>
      </select>
      <div className="mt-4 space-y-3">
        {(Object.keys(deliveryOptions) as DeliveryMethodId[]).map((id) => (
          <DeliveryOption
            key={id}
            selected={deliveryMethod === id}
            title={deliveryOptions[id].title}
            description={deliveryOptions[id].description}
            price={deliveryOptions[id].price}
            onSelect={() => setDeliveryMethod(id)}
          />
        ))}
      </div>
      <p className="mt-4 flex items-center gap-2 text-sm font-bold text-limebrand">
        <Truck className="h-5 w-5" />
        {selectedDelivery.title}
      </p>
    </SectionCard>
  );
}

export function CartPageClient({ dashboard = false }: { dashboard?: boolean }) {
  const { count, items, clear } = useCart();
  const recommendations = useMemo(() => productByIds(recommendedIds), []);
  const marketplaceHref = dashboard ? "/dashboard/marketplace" : "/marketplace";
  const checkoutHref = dashboard ? "/dashboard/finalizar-compra" : "/finalizar-compra";

  return (
    <section className="container-page py-10">
      <Link href={marketplaceHref} className="inline-flex items-center gap-2 text-sm font-black text-limebrand hover:text-limebrand2">
        <ArrowLeft className="h-4 w-4" />
        Continuar a comprar
      </Link>
      <div className="mt-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <h1 className="text-4xl font-black sm:text-5xl md:text-6xl">Carrinho</h1>
          <span aria-live="polite" className="grid h-8 min-w-8 place-items-center rounded-full bg-limebrand px-2 font-black text-black">{count}</span>
        </div>
        <p className="mt-4 text-base text-white/62 sm:text-lg">Revise seus itens e finalize sua compra.</p>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_25rem]">
        <div>
          {items.length ? (
            <SectionCard className="overflow-hidden">
              <div className="hidden grid-cols-[1.5fr_0.65fr_0.75fr_0.65fr_2rem] px-5 py-4 text-sm text-white/72 md:grid">
                <span>Produto</span>
                <span>Preço</span>
                <span>Quantidade</span>
                <span>Subtotal</span>
                <span />
              </div>
              {items.map((item) => <CartItemRow key={item.id} item={item} />)}
              <div className="border-t border-white/12 p-5">
                <button onClick={clear} className="inline-flex h-11 items-center gap-2 rounded-md border border-white/60 px-5 text-sm font-black hover:border-limebrand hover:text-limebrand">
                  <Trash2 className="h-4 w-4" />
                  Esvaziar carrinho
                </button>
              </div>
            </SectionCard>
          ) : <EmptyCart marketplaceHref={marketplaceHref} />}

          <h2 className="mt-10 text-2xl font-black">Você também pode gostar</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recommendations.map((product) => <RecommendationCard key={product.id} product={product} />)}
          </div>
        </div>

        <aside className="space-y-5">
          <OrderSummaryCard />
          <CartDeliveryCard />
          <CouponCard />
          <PaymentCard
            action={(
              <Link href={checkoutHref} className={cn("inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-limebrand px-4 font-black text-black transition hover:bg-limebrand2", !items.length && "pointer-events-none opacity-50")}>
                Finalizar compra
                <ArrowRight className="h-5 w-5" />
              </Link>
            )}
          />
        </aside>
      </div>
      <BenefitsStrip />
    </section>
  );
}

function CheckoutSectionTitle({ number, title, subtitle }: { number: number; title: string; subtitle?: string }) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-limebrand text-sm font-black text-limebrand">{number}</span>
      <div>
        <h2 className="text-2xl font-black">{title}</h2>
        {subtitle ? <p className="mt-1 text-white/58">{subtitle}</p> : null}
      </div>
    </div>
  );
}

function AddressRow({
  address,
  apartment,
  setAddress,
  setApartment,
}: {
  address: string;
  apartment: string;
  setAddress: (value: string) => void;
  setApartment: (value: string) => void;
}) {
  const [editing, setEditing] = useState(false);

  return (
    <div className="grid gap-4 rounded-md border border-white/55 bg-white/[0.02] p-4 md:grid-cols-[auto_1fr_auto] md:items-center">
      <MapPin className="h-6 w-6 text-limebrand" />
      <div>
        <h3 className="font-black">Endereço de entrega</h3>
        {editing ? (
          <div className="mt-3 grid gap-2">
            <input value={address} onChange={(event) => setAddress(event.target.value)} className="h-10 rounded-md border border-white/35 bg-black/20 px-3 text-sm outline-none focus:border-limebrand" />
            <input value={apartment} onChange={(event) => setApartment(event.target.value)} className="h-10 rounded-md border border-white/35 bg-black/20 px-3 text-sm outline-none focus:border-limebrand" />
          </div>
        ) : (
          <p className="mt-2 text-sm leading-6 text-white/62">{address}<br />{apartment}</p>
        )}
      </div>
      <button onClick={() => setEditing((current) => !current)} className="h-11 w-full rounded-md border border-white/60 px-5 text-sm font-black text-limebrand hover:border-limebrand md:w-auto">
        {editing ? "Guardar" : "Alterar"}
      </button>
    </div>
  );
}

function CheckoutReview() {
  const { items } = useCart();

  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div key={item.id} className="grid grid-cols-[4rem_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[4.5rem_minmax(0,1fr)_auto] sm:gap-4">
          <div className="relative h-16 overflow-hidden rounded-md bg-black">
            <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
          </div>
          <div className="min-w-0">
            <h3 className="font-black leading-6">{item.name}</h3>
            <p className="mt-1 text-sm text-white/56">{productDetail(item)}</p>
          </div>
          <div className="col-span-2 whitespace-nowrap text-left text-sm sm:col-span-1 sm:text-right">
            <span className="text-white/78">{formatKz(item.price)}&nbsp; x{item.qty}</span>
            <strong className="ml-3">{formatKz(item.price * item.qty)}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

function CheckoutBreakdownCard() {
  const { coupon, deliveryMethod, paymentMethod } = useCart();
  const selectedDelivery = deliveryOptions[deliveryMethod];
  const selectedPayment = paymentOptions[paymentMethod];
  const SelectedPaymentIcon = selectedPayment.icon;

  return (
    <SectionCard className="p-6">
      <div className="space-y-5">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 sm:grid-cols-[auto_minmax(0,1fr)_auto]">
          <Truck className="h-6 w-6 text-limebrand" />
          <div>
            <h3 className="font-black">Entrega</h3>
            <p className="mt-1 text-sm text-white/58">{selectedDelivery.title}</p>
          </div>
          <strong className="col-start-2 sm:col-start-auto">{formatKz(selectedDelivery.price)}</strong>
        </div>
        <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-t border-white/10 pt-5 sm:grid-cols-[auto_minmax(0,1fr)_auto]">
          <CreditCard className="h-6 w-6 text-limebrand" />
          <div>
            <h3 className="font-black">Cupom de desconto</h3>
            <p className="mt-1 text-sm text-white/58">{coupon ? `${coupon.code} aplicado` : "Nenhum cupom aplicado"}</p>
          </div>
          <span className="col-start-2 font-black text-limebrand sm:col-start-auto">{coupon ? "Ativo" : "Adicionar"}</span>
        </div>
        <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-t border-white/10 pt-5 sm:grid-cols-[auto_minmax(0,1fr)_auto]">
          <SelectedPaymentIcon className="h-6 w-6 text-limebrand" />
          <div>
            <h3 className="font-black">Pagamento</h3>
            <p className="mt-1 text-sm text-white/58">{selectedPayment.title}</p>
          </div>
          <span className="col-start-2 font-black text-limebrand sm:col-start-auto">Alterar</span>
        </div>
      </div>
    </SectionCard>
  );
}

function CheckoutTrustCard({ onFinish, disabled }: { onFinish: () => void; disabled: boolean }) {
  const items = [
    { icon: ShieldCheck, title: "Produtos 100% originais", text: "Garantia de autenticidade." },
    { icon: CreditCard, title: "Pagamento seguro e facilitado", text: "Ambiente 100% seguro." },
    { icon: Headphones, title: "Suporte dedicado", text: "Estamos prontos para te ajudar." },
  ];

  return (
    <SectionCard className="p-6">
      <div className="space-y-5">
        {items.map((item, index) => (
          <div key={item.title} className={cn("grid grid-cols-[auto_1fr] gap-4", index > 0 && "border-t border-white/10 pt-5")}>
            <item.icon className="h-6 w-6 text-limebrand" />
            <div>
              <h3 className="font-black">{item.title}</h3>
              <p className="mt-1 text-sm text-white/58">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={onFinish} disabled={disabled} className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-limebrand px-4 font-black text-black transition hover:bg-limebrand2 disabled:opacity-50">
        Finalizar compra
        <ArrowRight className="h-5 w-5" />
      </button>
      <SecureFootnote />
    </SectionCard>
  );
}

function SecureIntro() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 p-2">
      <ShieldCheck className="h-8 w-8 text-limebrand" />
      <div>
        <h2 className="font-black">Ambiente seguro</h2>
        <p className="mt-2 text-sm leading-6 text-white/62">Seus dados estão protegidos com criptografia de ponta.</p>
      </div>
    </div>
  );
}

function SuccessModal({ onClose, onMarketplace, orderReference }: { onClose: () => void; onMarketplace: () => void; orderReference?: string }) {
  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-black/58 p-4 backdrop-blur-xl">
      <div className="w-full max-w-md rounded-lg border border-white/18 bg-[#111313]/95 p-6 shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-black">Pedido realizado</h2>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-md text-white/62 hover:bg-white/8 hover:text-white" aria-label="Fechar confirmação">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="py-6 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-limebrand text-black shadow-glow">
            <Check className="h-8 w-8 stroke-[4]" />
          </span>
          <h3 className="mt-6 text-2xl font-black">Pedido realizado com sucesso</h3>
          <p className="mx-auto mt-4 max-w-xs leading-6 text-white/62">Recebemos o seu pedido e a equipa Noogym vai acompanhar tudo de perto.</p>
          {orderReference ? <p className="mt-3 text-sm font-black text-limebrand">Ref. {orderReference}</p> : null}
        </div>
        <button onClick={onMarketplace} className="h-12 w-full rounded-md bg-limebrand px-4 font-black text-black transition hover:bg-limebrand2">
          Voltar ao Marketplace
        </button>
      </div>
    </div>
  );
}

export function CheckoutPageClient({ dashboard = false }: { dashboard?: boolean }) {
  const router = useRouter();
  const { coupon, deliveryMethod, items, paymentMethod, clear, setDeliveryMethod, setPaymentMethod } = useCart();
  const [successOpen, setSuccessOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [orderReference, setOrderReference] = useState("");
  const [address, setAddress] = useState("Talatona, Av. Belas Business Park, Luanda, Angola");
  const [apartment, setApartment] = useState("Apart. 123, Bloco B");
  const cartHref = dashboard ? "/dashboard/carrinho" : "/carrinho";
  const marketplaceHref = dashboard ? "/dashboard/marketplace" : "/marketplace";

  function goToMarketplace() {
    clear();
    router.push(marketplaceHref);
  }

  async function finishOrder() {
    if (!items.length || submitting) return;

    if (demoMode) {
      setOrderReference("DEMO");
      setSuccessOpen(true);
      return;
    }

    setSubmitError("");
    setSubmitting(true);

    try {
      const session = readUserSession();
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: session?.name,
          customerEmail: session?.email,
          customerPhone: session?.phone,
          deliveryMethod,
          paymentMethod,
          deliveryAddress: [address, apartment].filter(Boolean).join(", "),
          couponCode: coupon?.code,
          items: items.map((item) => ({
            productId: item.id,
            name: item.name,
            quantity: item.qty,
            unitPrice: item.price,
          })),
        }),
      });
      const payload = await readApiPayload<{ order?: { id?: string; payments?: { providerRef?: string | null }[] }; message?: string }>(response);

      if (!response.ok) {
        throw new Error(getApiErrorMessage(payload, "Nao foi possivel finalizar o pedido agora."));
      }

      const providerRef = "order" in payload ? payload.order?.payments?.[0]?.providerRef : undefined;
      const orderId = "order" in payload ? payload.order?.id : undefined;
      setOrderReference(providerRef || orderId || "");
      setSuccessOpen(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Nao foi possivel finalizar o pedido agora.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="container-page py-10">
      <Link href={cartHref} className="inline-flex items-center gap-2 text-sm font-black text-limebrand hover:text-limebrand2">
        <ArrowLeft className="h-4 w-4" />
        Voltar para o carrinho
      </Link>
      <div className="mt-8 max-w-2xl">
        <h1 className="text-4xl font-black sm:text-5xl md:text-6xl">Finalizar compra</h1>
        <p className="mt-4 text-lg leading-8 text-white/68">Revise seus dados, escolha a forma de pagamento e finalize seu pedido com segurança.</p>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_28rem]">
        <SectionCard className="overflow-hidden">
          <div className="p-5 md:p-7">
            <CheckoutSectionTitle number={1} title="Entrega" />
            <div className="space-y-3">
              {(Object.keys(deliveryOptions) as DeliveryMethodId[]).map((id) => (
                <DeliveryOption
                  key={id}
                  selected={deliveryMethod === id}
                  title={deliveryOptions[id].title}
                  description={deliveryOptions[id].description}
                  price={deliveryOptions[id].price}
                  onSelect={() => setDeliveryMethod(id)}
                />
              ))}
              <AddressRow address={address} apartment={apartment} setAddress={setAddress} setApartment={setApartment} />
            </div>
          </div>

          <div className="border-t border-white/10 p-5 md:p-7">
            <CheckoutSectionTitle number={2} title="Pagamento" subtitle="Escolha a forma de pagamento" />
            <div className="space-y-3">
              {(Object.keys(paymentOptions) as PaymentMethodId[]).map((id) => (
                <PaymentOption
                  key={id}
                  selected={paymentMethod === id}
                  title={paymentOptions[id].title}
                  description={paymentOptions[id].description}
                  icon={paymentOptions[id].icon}
                  badge={paymentOptions[id].badge}
                  onSelect={() => setPaymentMethod(id)}
                />
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 p-5 md:p-7">
            <CheckoutSectionTitle number={3} title="Revisão do pedido" />
            {items.length ? <CheckoutReview /> : <EmptyCart />}
          </div>
        </SectionCard>

        <aside className="space-y-5">
          <SecureIntro />
          {submitError ? (
            <div className="rounded-md border border-red-400/35 bg-red-950/25 p-4 text-sm text-red-100">
              {submitError}
            </div>
          ) : null}
          <OrderSummaryCard />
          <CheckoutBreakdownCard />
          <CheckoutTrustCard onFinish={finishOrder} disabled={!items.length || submitting} />
          {submitting ? <p className="text-center text-sm text-white/58">A registrar pedido...</p> : null}
        </aside>
      </div>

      {successOpen ? <SuccessModal onClose={() => setSuccessOpen(false)} onMarketplace={goToMarketplace} orderReference={orderReference} /> : null}
    </section>
  );
}

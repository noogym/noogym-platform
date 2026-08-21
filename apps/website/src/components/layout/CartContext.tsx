"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CheckCircle2, ShoppingCart, X } from "lucide-react";
import { type Product } from "@/data/products";

export type DeliveryMethodId = "rapida" | "expressa";
export type PaymentMethodId = "delivery" | "multicaixa" | "card";

type CartItem = Product & { qty: number };
type Coupon = { code: string; percent: number };
type CartToast = {
  id: number;
  title: string;
  message: string;
};
type CartContextValue = {
  items: CartItem[];
  count: number;
  deliveryMethod: DeliveryMethodId;
  paymentMethod: PaymentMethodId;
  coupon: Coupon | null;
  addItem: (product: Product) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  setDeliveryMethod: (method: DeliveryMethodId) => void;
  setPaymentMethod: (method: PaymentMethodId) => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  clearCoupon: () => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const legacyCartStorageKey = "noogym:marketplace-cart";
const cartStorageKey = "noogym:marketplace-cart:v2";

function readStoredCart(value: string | null) {
  if (!value) return null;

  try {
    const parsed = JSON.parse(value) as Array<Product & { qty?: unknown }>;
    if (!Array.isArray(parsed)) return null;

    return parsed
      .filter((item): item is Product & { qty: number } => (
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.price === "number" &&
        typeof item.qty === "number" &&
        Number.isFinite(item.qty) &&
        item.qty > 0
      ))
      .map((item) => ({ ...item, qty: Math.floor(item.qty) }));
  } catch {
    return null;
  }
}

export function CartProvider({ children }: React.PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethodId>("rapida");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodId>("delivery");
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [loadedStorage, setLoadedStorage] = useState(false);
  const [toasts, setToasts] = useState<CartToast[]>([]);
  const count = items.reduce((sum, item) => sum + item.qty, 0);

  const showAddedToast = useCallback((product: Product, qty: number) => {
    const toastId = Date.now();
    setToasts((current) => [
      ...current.slice(-2),
        {
          id: toastId,
          title: "Adicionado ao carrinho",
          message: `${product.name} · ${qty}x`,
        },
      ]);
  }, []);

  const dismissToast = useCallback((toastId: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== toastId));
  }, []);

  useEffect(() => {
    window.localStorage.removeItem(legacyCartStorageKey);
    const storedItems = readStoredCart(window.localStorage.getItem(cartStorageKey));
    if (storedItems) {
      setItems(storedItems);
    }
    setLoadedStorage(true);
  }, []);

  useEffect(() => {
    if (!loadedStorage) return;
    window.localStorage.setItem(cartStorageKey, JSON.stringify(items));
  }, [items, loadedStorage]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== cartStorageKey) return;
      setItems(readStoredCart(event.newValue) ?? []);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    if (!toasts.length) return;
    const timeout = window.setTimeout(() => {
      setToasts((current) => current.slice(1));
    }, 3200);

    return () => window.clearTimeout(timeout);
  }, [toasts]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count,
      deliveryMethod,
      paymentMethod,
      coupon,
      addItem: (product) => {
        const currentItem = items.find((item) => item.id === product.id);
        showAddedToast(product, currentItem ? currentItem.qty + 1 : 1);
        setItems((current) => {
          const found = current.find((item) => item.id === product.id);
          if (found) {
            return current.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
          }
          return [...current, { ...product, qty: 1 }];
        });
      },
      incrementItem: (id) => {
        setItems((current) => current.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
      },
      decrementItem: (id) => {
        setItems((current) =>
          current.flatMap((item) => {
            if (item.id !== id) return [item];
            const nextQty = item.qty - 1;
            return nextQty > 0 ? [{ ...item, qty: nextQty }] : [];
          }),
        );
      },
      updateQty: (id, qty) => {
        setItems((current) => {
          if (qty <= 0) return current.filter((item) => item.id !== id);
          return current.map((item) => (item.id === id ? { ...item, qty } : item));
        });
      },
      removeItem: (id) => setItems((current) => current.filter((item) => item.id !== id)),
      setDeliveryMethod,
      setPaymentMethod,
      applyCoupon: (code) => {
        const normalized = code.trim().toUpperCase();
        if (!normalized) return { success: false, message: "Digite um cupom para aplicar." };
        setCoupon({ code: normalized, percent: 0.1 });
        return { success: true, message: `Cupom ${normalized} aplicado com 10% de desconto.` };
      },
      clearCoupon: () => setCoupon(null),
      clear: () => setItems([]),
    }),
    [items, count, deliveryMethod, paymentMethod, coupon, showAddedToast],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartToastViewport onDismiss={dismissToast} toasts={toasts} />
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

function CartToastViewport({
  onDismiss,
  toasts,
}: {
  onDismiss: (toastId: number) => void;
  toasts: CartToast[];
}) {
  if (!toasts.length) return null;

  return (
    <div className="fixed right-4 top-20 z-[100] grid w-[calc(100vw-2rem)] max-w-xs gap-2 sm:right-5">
      {toasts.map((toast) => (
        <div
          className="rounded-md border border-limebrand/45 bg-[#10140e]/95 p-3 text-white shadow-[0_14px_44px_rgba(0,0,0,0.38)] backdrop-blur-xl"
          key={toast.id}
          role="status"
        >
          <div className="grid grid-cols-[auto_1fr_auto] gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-limebrand text-black">
              <CheckCircle2 className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-black leading-tight">{toast.title}</p>
              <p className="mt-0.5 truncate text-xs text-white/62">{toast.message}</p>
              <a
                className="mt-2 inline-flex h-7 items-center gap-1.5 rounded-md border border-limebrand/45 px-2 text-xs font-black text-limebrand hover:bg-limebrand hover:text-black"
                href="/carrinho"
              >
                Carrinho
                <ShoppingCart className="h-3.5 w-3.5" />
              </a>
            </div>
            <button
              aria-label="Fechar aviso"
              className="grid h-7 w-7 place-items-center rounded-md text-white/54 transition hover:bg-white/8 hover:text-white"
              onClick={() => onDismiss(toast.id)}
              type="button"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

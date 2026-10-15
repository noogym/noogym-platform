"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TurnstileWidgetId = string;

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      theme: "light" | "dark" | "auto";
      size: "normal" | "compact" | "flexible";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => TurnstileWidgetId;
  reset: (widgetId: TurnstileWidgetId) => void;
  remove?: (widgetId: TurnstileWidgetId) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileWidgetProps = {
  error?: string;
  onError: (message: string) => void;
  onVerify: (token: string) => void;
};

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function TurnstileWidget({ error, onError, onVerify }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<TurnstileWidgetId | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!siteKey || !ready || !containerRef.current || !window.turnstile || widgetIdRef.current) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "dark",
      size: "flexible",
      callback: (token) => onVerify(token),
      "expired-callback": () => {
        onVerify("");
        onError("A verificação expirou. Confirme novamente.");
      },
      "error-callback": () => {
        onVerify("");
        onError("Não foi possível carregar a verificação. Tente novamente.");
      },
    });
  }, [onError, onVerify, ready]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile?.remove) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, []);

  return (
    <div className="grid gap-2">
      <Script
        async
        defer
        onReady={() => setReady(true)}
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
      />
      {siteKey ? (
        <div ref={containerRef} />
      ) : (
        <div className="rounded-md border border-red-400/35 bg-red-950/25 p-3 text-xs text-red-100">
          A verificação de segurança não está configurada.
        </div>
      )}
      {error ? <span className="text-xs text-red-300">{error}</span> : null}
    </div>
  );
}

export function hasTurnstileSiteKey() {
  return process.env.NODE_ENV === "production" && Boolean(siteKey);
}

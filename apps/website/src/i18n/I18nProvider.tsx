"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { type Locale, localeLabels, translate } from "./translations";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (text: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const textOriginals = new WeakMap<Text, string>();
const attributeOriginals = new WeakMap<Element, Map<string, string>>();
const translatedAttributes = ["placeholder", "aria-label", "title"];
const supportedLocales: Locale[] = ["pt", "en"];

function withWhitespace(original: string, translated: string) {
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function translateFlexible(text: string, locale: Locale) {
  const exact = translate(text, locale);
  if (exact !== text || locale === "pt") return exact;

  return text.replace("Todos os direitos reservados.", translate("Todos os direitos reservados.", locale));
}

function isKnownRenderedValue(current: string, original: string) {
  return supportedLocales.some((locale) => {
    const translated = translateFlexible(original.trim(), locale);
    return current === withWhitespace(original, translated);
  });
}

function shouldSkipTextNode(node: Text) {
  const parent = node.parentElement;
  if (!parent) return true;
  return ["SCRIPT", "STYLE", "NOSCRIPT", "SVG"].includes(parent.tagName);
}

function syncTextNode(node: Text, locale: Locale) {
  if (shouldSkipTextNode(node)) return;

  const current = node.nodeValue ?? "";
  if (!current.trim()) return;

  const cachedOriginal = textOriginals.get(node);
  const original = cachedOriginal && isKnownRenderedValue(current, cachedOriginal) ? cachedOriginal : current;
  textOriginals.set(node, original);

  const translated = translateFlexible(original.trim(), locale);
  const next = withWhitespace(original, translated);

  if (node.nodeValue !== next) {
    node.nodeValue = next;
  }
}

function syncAttributes(element: Element, locale: Locale) {
  for (const attribute of translatedAttributes) {
    const current = element.getAttribute(attribute);
    if (!current?.trim()) continue;

    let originals = attributeOriginals.get(element);
    if (!originals) {
      originals = new Map();
      attributeOriginals.set(element, originals);
    }

    const cachedOriginal = originals.get(attribute);
    const original = cachedOriginal && isKnownRenderedValue(current, cachedOriginal) ? cachedOriginal : current;
    originals.set(attribute, original);

    const translated = translateFlexible(original.trim(), locale);
    if (current !== translated) {
      element.setAttribute(attribute, translated);
    }
  }
}

function syncDocument(locale: Locale) {
  document.documentElement.lang = locale === "pt" ? "pt-AO" : "en";

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    syncTextNode(node as Text, locale);
    node = walker.nextNode();
  }

  document.body.querySelectorAll("*").forEach((element) => syncAttributes(element, locale));
}

export function I18nProvider({ children }: React.PropsWithChildren) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const saved = window.localStorage.getItem("noogym-language");
    if (saved === "pt" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("noogym-language", locale);
    syncDocument(locale);

    const observer = new MutationObserver(() => syncDocument(locale));
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatedAttributes,
    });

    return () => observer.disconnect();
  }, [locale, pathname]);

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    setLocale: setLocaleState,
    t: (text: string) => translateFlexible(text, locale),
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}

export { localeLabels };

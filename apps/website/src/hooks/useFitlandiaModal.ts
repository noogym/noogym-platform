"use client";

import { useCallback, useEffect, useState } from "react";
import { fitlandiaCampaign } from "@/config/fitlandia";

type StoredModalState = {
  captured?: boolean;
  closedAt: number;
};

const capturedTtlMs = fitlandiaCampaign.capturedTtlHours * 60 * 60 * 1000;
const dismissedTtlMs = fitlandiaCampaign.dismissedTtlHours * 60 * 60 * 1000;

function readStoredState(value: string | null): StoredModalState | null {
  if (!value) return null;

  const legacyTimestamp = Number(value);
  if (Number.isFinite(legacyTimestamp)) {
    return {
      captured: true,
      closedAt: legacyTimestamp,
    };
  }

  try {
    const parsed = JSON.parse(value) as Partial<StoredModalState>;
    if (typeof parsed.closedAt !== "number") return null;

    return {
      captured: Boolean(parsed.captured),
      closedAt: parsed.closedAt,
    };
  } catch {
    return null;
  }
}

function shouldOpenModal() {
  if (!fitlandiaCampaign.active) return false;

  const storedState = readStoredState(window.localStorage.getItem(fitlandiaCampaign.storageKey));
  if (!storedState) return true;

  const ttlMs = storedState.captured ? capturedTtlMs : dismissedTtlMs;
  return Date.now() - storedState.closedAt > ttlMs;
}

export function useFitlandiaModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(shouldOpenModal());
  }, []);

  const close = useCallback((captured = false) => {
    window.localStorage.setItem(
      fitlandiaCampaign.storageKey,
      JSON.stringify({
        captured,
        closedAt: Date.now(),
      }),
    );
    setOpen(false);
  }, []);

  return {
    close,
    open,
  };
}

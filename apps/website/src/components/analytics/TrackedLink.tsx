"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  eventParams?: Record<string, string>;
};

export function TrackedLink({ eventName, eventParams, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        const gtag = (window as Window & {
          gtag?: (command: "event", name: string, params?: Record<string, string>) => void;
        }).gtag;
        gtag?.("event", eventName, eventParams);
        onClick?.(event);
      }}
    />
  );
}

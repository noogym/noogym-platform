"use client";

import { useEffect, useState } from "react";
import { DemoModal } from "./DemoModal";

export function DemoModalController() {
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      if (target.closest("[data-demo-trigger]")) {
        setDemoOpen(true);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />;
}

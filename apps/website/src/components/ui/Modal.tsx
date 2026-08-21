"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Modal({ open, title, children, onClose }: React.PropsWithChildren<{ open: boolean; title: string; onClose: () => void }>) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="glass max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-lg p-5 sm:p-6" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">{title}</h2>
              <button onClick={onClose} className="rounded-md p-2 text-white/60 hover:bg-white/10 hover:text-white" aria-label="Fechar">
                <X className="h-5 w-5" />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

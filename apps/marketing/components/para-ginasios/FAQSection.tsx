"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "./data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-shell scroll-mt-24 py-12" id="faq">
      <p className="eyebrow mb-5">Dúvidas frequentes</p>
      <div className="grid gap-3 lg:grid-cols-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              className="rounded-lg border border-white/10 bg-white/[0.025]"
              key={faq.question}
            >
              <button
                className="flex w-full min-w-0 items-start justify-between gap-4 px-4 py-4 text-left text-sm font-bold leading-6 text-white sm:px-5"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                {faq.question}
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-zinc-500 transition ${
                    isOpen ? "rotate-180 text-noogym-green" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-5 text-sm leading-6 text-zinc-400 sm:px-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

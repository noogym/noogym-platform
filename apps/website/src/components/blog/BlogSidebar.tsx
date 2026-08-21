"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { useState } from "react";
import { articles } from "@/data/blog";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function BlogSidebar() {
  const [done, setDone] = useState(false);
  return (
    <aside className="space-y-6">
      <div className="glass rounded-lg p-5">
        <h2 className="mb-4 text-2xl font-bold">Mais populares</h2>
        <div className="space-y-4">
          {articles.slice(0, 5).map((article, index) => (
            <Link key={article.id} href={`/blog/${article.id}`} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/10 pb-4 transition hover:text-limebrand last:border-0">
              <div>
                <h3 className="font-semibold leading-5">{article.title}</h3>
                <p className="mt-1 text-xs text-white/45">{article.date} · {article.readTime}</p>
              </div>
              <span className="text-3xl font-black text-limebrand">{index + 1}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="glass rounded-lg p-6">
        <Mail className="h-9 w-9 text-limebrand" />
        <h2 className="mt-4 text-2xl font-bold">Receba conteúdos exclusivos</h2>
        <p className="mt-2 text-sm text-white/58">Dicas, novidades e muito mais direto no seu e-mail.</p>
        <div className="mt-5 space-y-3">
          <Input placeholder="Seu melhor e-mail" type="email" />
          <Button className="w-full" onClick={() => setDone(true)}>{done ? "Inscrito!" : "Inscrever-se"}</Button>
        </div>
      </div>
    </aside>
  );
}

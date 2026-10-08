"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, Dumbbell, Flame, HeartPulse, MapPin, Percent, Scale } from "lucide-react";
import { blogCategories, articles, fitnessUpdates } from "@/data/blog";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { Input } from "@/components/ui/Input";
import { CTASection } from "@/components/ui/CTASection";

const tools = [
  { icon: Scale, title: "IMC", text: "Calcule uma referencia rapida de composicao corporal." },
  { icon: Flame, title: "Calorias", text: "Estime necessidades diarias para ganhar ou perder peso." },
  { icon: Calculator, title: "Macros", text: "Distribua proteina, carboidrato e gordura por objetivo." },
  { icon: Dumbbell, title: "1RM", text: "Projete carga maxima a partir das suas repeticoes." },
  { icon: Percent, title: "Gordura corporal", text: "Acompanhe uma estimativa simples de percentual." },
  { icon: HeartPulse, title: "Gerador fitness", text: "Ideias de treino e alimentacao com apoio inteligente." },
];

export function BlogClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const filtered = useMemo(
    () => articles.filter((article) => (category === "Todos" || article.category === category) && article.title.toLowerCase().includes(query.toLowerCase())),
    [query, category],
  );

  return (
    <>
      <section className="container-page pt-10">
        <div className="relative overflow-hidden rounded-lg border border-white/12 bg-[url('/images/blog/blog-hero-showcase.png')] bg-cover bg-center p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/84 to-black/20" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase text-limebrand">Blog Noogym</p>
            <h1 className="mt-5 text-balance text-3xl font-black sm:text-4xl md:text-6xl">
              Conteudo, calculadoras e ferramentas para os <span className="text-limebrand">melhores resultados</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Dicas de treino, nutricao, mindset e tecnologia para transformar pesquisa em acao.
            </p>
            <div className="mt-7 max-w-lg">
              <Input icon placeholder="Buscar artigos..." value={query} onChange={(event) => setQuery(event.target.value)} />
            </div>
          </div>
        </div>
      </section>
      <section className="container-page py-8">
        <div className="flex flex-wrap gap-3">
          {blogCategories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-md border px-5 py-3 text-sm ${category === item ? "border-limebrand bg-limebrand/10 text-limebrand" : "border-white/12 text-white/65"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>
      <section className="container-page py-4">
        <div className="rounded-lg border border-white/12 bg-white/[0.03] p-5">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-limebrand">Ferramentas Noogym</p>
              <h2 className="mt-2 text-2xl font-black">Recursos que geram pesquisa, retorno e evolucao</h2>
            </div>
            <span className="rounded-md border border-limebrand/25 bg-limebrand/10 px-3 py-2 text-xs font-bold text-limebrand">Em preparacao</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <div key={tool.title} className="rounded-md border border-white/10 bg-black/20 p-4">
                  <Icon className="h-6 w-6 text-limebrand" />
                  <h3 className="mt-3 font-bold">{tool.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/58">{tool.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="container-page py-8">
        <div className="rounded-lg border border-limebrand/25 bg-limebrand/[0.04] p-5">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-limebrand">Atualidade</p>
              <h2 className="mt-2 text-2xl font-black">Acontece no Fitness</h2>
            </div>
            <button className="text-sm font-bold text-limebrand transition hover:text-white" onClick={() => setCategory("Atualidade")}>
              Ver atualidade
            </button>
          </div>
          <div className="grid gap-3 lg:grid-cols-3">
            {fitnessUpdates.slice(0, 3).map((article) => (
              <Link key={article.id} href={`/blog/${article.id}`} className="rounded-md border border-white/10 bg-black/25 p-4 transition hover:border-limebrand/45">
                <p className="text-xs font-bold uppercase text-limebrand">{article.category}</p>
                <h3 className="mt-2 font-bold leading-6">{article.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{article.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/50">
                  <span>{article.date}</span>
                  {article.city ? (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-limebrand" />
                      {article.city}
                    </span>
                  ) : null}
                  {article.sourceName ? <span>{article.sourceName}</span> : null}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container-page grid gap-8 py-8 lg:grid-cols-[1fr_340px]">
        <div>
          <h2 className="mb-5 text-2xl font-bold">Destaques</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="mt-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Ultimos artigos</h2>
            <button className="text-sm font-bold text-limebrand" onClick={() => setCategory("Todos")}>
              Ver todos
            </button>
          </div>
          <div className="mt-5 grid gap-3">
            {filtered.slice(3).map((article) => (
              <ArticleCard key={article.id} article={article} compact />
            ))}
          </div>
        </div>
        <BlogSidebar />
      </section>
      <section className="container-page py-10">
        <CTASection
          title={<>Informacao e poder. Acao e <span className="text-limebrand">evolucao.</span></>}
          text="Crie sua conta para acompanhar planos, treinos, nutricao e beneficios Noogym."
          primary="Criar conta"
          href="/criar-conta"
          secondary="Ver planos"
          secondaryHref="/planos"
        />
      </section>
    </>
  );
}

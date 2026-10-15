import Image from "next/image";
import Link from "next/link";
import { Bookmark, MapPin } from "lucide-react";
import type { Article } from "@/data/blog";
import { Badge } from "@/components/ui/Badge";

export function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  if (compact) {
    return (
      <article className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.025] p-3 md:grid-cols-[180px_1fr]">
        <Link href={`/blog/${article.id}`} className="relative h-32 overflow-hidden rounded-md">
          <Image src={article.image} alt={article.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/35" />
        </Link>
        <div>
          <Badge>{article.category}</Badge>
          <h3 className="mt-3 font-bold">
            <Link href={`/blog/${article.id}`} className="transition hover:text-limebrand">{article.title}</Link>
          </h3>
          <p className="mt-2 text-sm text-white/58">{article.summary}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
            <p className="text-white/42">
              {article.date} · {article.readTime} de leitura{article.city ? ` · ${article.city}` : ""}
            </p>
            <Link href={`/blog/${article.id}`} className="font-bold text-limebrand transition hover:text-white">Ler artigo</Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-lg border border-white/12 bg-white/[0.035] p-4 transition hover:border-limebrand/45">
      <Link href={`/blog/${article.id}`} className="relative block h-64 overflow-hidden rounded-md">
        <Image src={article.image} alt={article.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <Badge className="absolute left-3 top-3">{article.category}</Badge>
      </Link>
      <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/50">
        <span>{article.date} · {article.readTime} de leitura</span>
        {article.city ? (
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-4 w-4 text-limebrand" />
            {article.city}
          </span>
        ) : null}
      </p>
      <h3 className="mt-3 text-xl font-bold">
        <Link href={`/blog/${article.id}`} className="transition hover:text-limebrand">{article.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-white/58">{article.summary}</p>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm text-white/55">{article.sourceName ?? article.author}</span>
        <div className="flex items-center gap-4">
          <Link href={`/blog/${article.id}`} className="text-sm font-bold text-limebrand transition hover:text-white">Ler artigo</Link>
          <Bookmark className="h-5 w-5 text-white/55" />
        </div>
      </div>
    </article>
  );
}

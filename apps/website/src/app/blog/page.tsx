import type { Metadata } from "next";
import { BlogClient } from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Conteúdo Noogym com dicas de treino, nutrição, saúde, mindset e tecnologia para melhores resultados.",
};

export default function BlogPage() {
  return <BlogClient />;
}

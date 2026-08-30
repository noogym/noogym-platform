import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, CalendarDays, CheckCircle2, Clock, Share2, Sparkles, Target, User } from "lucide-react";
import { articles } from "@/data/blog";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/ui/CTASection";

type ArticlePageProps = {
  params: Promise<{ id: string }>;
};

type ArticleSection = {
  title: string;
  paragraphs: string[];
};

type ArticleBody = {
  intro: string;
  highlight: string;
  sections: ArticleSection[];
  checklist: string[];
};

const articleBodies: Record<string, ArticleBody> = {
  forca: {
    intro: "Forca nao nasce apenas de cargas pesadas. Ela vem de tecnica, progressao, recuperacao e consistencia suficiente para o corpo entender que precisa evoluir.",
    highlight: "O melhor treino de forca e aquele que voce consegue repetir, medir e melhorar sem sacrificar movimento, sono ou recuperacao.",
    sections: [
      {
        title: "Comece pelo movimento certo",
        paragraphs: [
          "Antes de aumentar a carga, observe amplitude, postura e controle. Um agachamento, supino ou levantamento bem executado cria uma base mais segura para evoluir sem acumular compensacoes.",
          "Use as primeiras series como leitura do corpo. Se a tecnica muda muito quando a carga sobe, o peso deixou de ser estimulo e virou ruido.",
        ],
      },
      {
        title: "Progrida sem pressa",
        paragraphs: [
          "Aumente um pequeno detalhe por vez: mais uma repeticao, mais uma serie, menos descanso ou uma carga ligeiramente maior. Progresso bom e aquele que deixa rastro nos dados.",
          "No Noogym, acompanhar volume, frequencia e consistencia ajuda a perceber se voce esta evoluindo ou apenas treinando no automatico.",
        ],
      },
      {
        title: "Recuperacao tambem treina",
        paragraphs: [
          "Sono, alimentacao e dias de descanso definem quanto do treino vira resultado. Quando a recuperacao falha, a performance cai antes mesmo de voce perceber.",
          "Se a carga estacionou por semanas, revise descanso e rotina antes de trocar todo o plano.",
        ],
      },
    ],
    checklist: ["Registre cargas e repeticoes", "Priorize tecnica nas series pesadas", "Mantenha 2 a 4 movimentos principais", "Durma o suficiente para recuperar", "Reavalie o plano a cada 4 semanas"],
  },
  alimentacao: {
    intro: "O que voce come antes e depois do treino nao precisa ser complicado. O essencial e chegar com energia, treinar bem e oferecer ao corpo nutrientes para recuperar.",
    highlight: "A melhor estrategia nutricional e aquela que combina objetivo, horario do treino e alimentos que voce realmente consegue manter.",
    sections: [
      {
        title: "Antes do treino",
        paragraphs: [
          "Priorize uma refeicao leve com carboidratos e alguma proteina, ajustando a quantidade ao tempo disponivel. Quanto mais perto do treino, mais simples deve ser a refeicao.",
          "Evite testar alimentos muito pesados nos dias importantes. O pre-treino deve ajudar sua energia, nao disputar atencao com a digestao.",
        ],
      },
      {
        title: "Depois do treino",
        paragraphs: [
          "A refeicao pos-treino deve apoiar recuperacao muscular e reposicao de energia. Proteina, carboidrato e hidratacao resolvem a maior parte do processo.",
          "Suplementos podem ajudar, mas nao substituem rotina alimentar. Eles funcionam melhor quando entram para facilitar uma base que ja existe.",
        ],
      },
      {
        title: "Consistencia vence detalhe",
        paragraphs: [
          "Mais importante que acertar uma refeicao perfeita e manter um padrao bom ao longo da semana. Resultados aparecem quando treino e alimentacao conversam entre si.",
          "Use o marketplace Noogym para encontrar opcoes praticas, mas mantenha o foco no basico bem feito.",
        ],
      },
    ],
    checklist: ["Coma algo adequado ao horario do treino", "Inclua proteina no pos-treino", "Hidrate-se antes e depois", "Evite exageros perto do treino", "Planeje opcoes simples para dias corridos"],
  },
  ia: {
    intro: "A inteligencia artificial no treino e mais util quando transforma dados em decisoes simples. Ela ajuda a ajustar estimulos, perceber padroes e reduzir achismos.",
    highlight: "IA nao substitui disciplina nem orientacao profissional, mas melhora a qualidade das decisoes quando os dados sao consistentes.",
    sections: [
      {
        title: "Dados que importam",
        paragraphs: [
          "Frequencia, volume, cargas, descanso e evolucao de medidas dizem muito sobre o que esta funcionando. Quando esses sinais ficam organizados, o plano melhora.",
          "O objetivo nao e olhar numeros o dia todo, e entender quais pequenas mudancas aproximam voce do resultado.",
        ],
      },
      {
        title: "Ajustes mais inteligentes",
        paragraphs: [
          "Com historico suficiente, fica mais facil perceber quando aumentar intensidade, reduzir volume ou trocar uma estrategia que parou de funcionar.",
          "A IA ajuda a encontrar padroes, mas a sensacao do treino continua importante: fadiga, dor e motivacao tambem contam.",
        ],
      },
      {
        title: "Treino mais pessoal",
        paragraphs: [
          "Duas pessoas podem ter o mesmo objetivo e precisar de caminhos diferentes. O valor da tecnologia esta em adaptar o plano ao comportamento real de cada atleta.",
          "No Noogym, a proposta e unir acesso a ginasios, acompanhamento e insights para que a evolucao seja mais clara.",
        ],
      },
    ],
    checklist: ["Registre treinos com consistencia", "Compare evolucao semanal", "Ajuste uma variavel por vez", "Use dados sem ignorar sinais do corpo", "Mantenha metas claras"],
  },
  funcional: {
    intro: "Treino funcional e musculacao nao precisam competir. Eles desenvolvem capacidades diferentes e podem se complementar muito bem dentro de uma rotina inteligente.",
    highlight: "A melhor escolha depende do seu objetivo principal, do tempo disponivel e do tipo de movimento que voce quer melhorar.",
    sections: [
      {
        title: "Quando priorizar musculacao",
        paragraphs: [
          "Musculacao e excelente para hipertrofia, ganho de forca e controle preciso de carga. Ela permite evoluir grupos musculares especificos com muita clareza.",
          "Tambem e uma boa base para quem esta voltando aos treinos, porque facilita ajustar intensidade e aprender movimentos com controle.",
        ],
      },
      {
        title: "Quando usar funcional",
        paragraphs: [
          "O funcional trabalha coordenacao, condicionamento, mobilidade e movimentos integrados. Pode ser otimo para performance geral e para tornar o treino mais dinamico.",
          "Ele exige atencao a tecnica, principalmente quando mistura velocidade, fadiga e movimentos complexos.",
        ],
      },
      {
        title: "Como combinar os dois",
        paragraphs: [
          "Uma rotina pode ter musculacao como base de forca e funcional como complemento de condicionamento. O segredo esta em distribuir bem a intensidade.",
          "Escolha ginasios e modalidades que facilitem essa combinacao, sem transformar a semana em excesso de estimulo.",
        ],
      },
    ],
    checklist: ["Defina seu objetivo principal", "Combine forca e condicionamento", "Evite treinos intensos todos os dias", "Respeite tecnica antes da velocidade", "Escolha modalidades que voce gosta"],
  },
  carboidratos: {
    intro: "Carboidratos nao sao inimigos. Eles sao uma fonte importante de energia, especialmente para quem treina com intensidade e quer sustentar performance.",
    highlight: "O problema raramente e o carboidrato isolado; geralmente e quantidade, contexto e qualidade da rotina alimentar.",
    sections: [
      {
        title: "Energia para treinar",
        paragraphs: [
          "Treinos intensos usam carboidratos como combustivel importante. Cortes radicais podem reduzir disposicao, carga e qualidade das sessoes.",
          "Ajustar carboidratos ao horario do treino pode melhorar energia sem precisar complicar a dieta.",
        ],
      },
      {
        title: "Escolhas melhores",
        paragraphs: [
          "Arroz, batata, fruta, aveia e outras fontes simples podem funcionar muito bem. O foco deve estar no conjunto da dieta, nao em demonizar um grupo alimentar.",
          "Doces e ultraprocessados tambem entram como carboidratos, mas se comportam diferente na saciedade e na qualidade nutricional.",
        ],
      },
      {
        title: "Quantidade certa",
        paragraphs: [
          "A quantidade ideal muda conforme objetivo, peso, rotina e volume de treino. Quem busca hipertrofia e quem busca perda de gordura podem precisar de estrategias diferentes.",
          "Procure orientacao profissional para personalizar, especialmente se houver condicoes clinicas ou metas mais especificas.",
        ],
      },
    ],
    checklist: ["Use carboidratos perto dos treinos", "Priorize fontes simples e consistentes", "Evite cortes extremos sem acompanhamento", "Ajuste por objetivo e rotina", "Observe energia e recuperacao"],
  },
  sono: {
    intro: "Sono e um dos pilares mais subestimados dos resultados. Sem recuperar bem, o corpo treina pior, aprende pior e evolui mais devagar.",
    highlight: "Dormir melhor nao e luxo: e parte do plano de treino.",
    sections: [
      {
        title: "Recuperacao muscular",
        paragraphs: [
          "Durante o sono, o corpo reorganiza processos ligados a recuperacao, energia e regulacao hormonal. Treinar forte sem dormir bem cobra a conta.",
          "Se voce acorda cansado com frequencia, talvez o problema nao esteja no exercicio, mas na capacidade de recuperar dele.",
        ],
      },
      {
        title: "Performance e foco",
        paragraphs: [
          "Pouco sono prejudica concentracao, coordenacao e percepcao de esforco. A mesma carga pode parecer mais pesada quando o descanso foi ruim.",
          "Isso aumenta o risco de treinar sem qualidade e de tomar decisoes ruins durante a sessao.",
        ],
      },
      {
        title: "Rotina que ajuda",
        paragraphs: [
          "Crie horarios mais previsiveis, reduza telas perto de dormir e evite cafeina tarde demais. Pequenos ajustes repetidos melhoram muito o ambiente do sono.",
          "Acompanhe seu desempenho nos dias seguintes: o treino costuma mostrar rapidamente quando a recuperacao melhorou.",
        ],
      },
    ],
    checklist: ["Mantenha horario regular", "Reduza telas antes de dormir", "Evite cafeina no fim do dia", "Observe energia no treino", "Inclua descanso na estrategia"],
  },
};

function getArticleBody(id: string): ArticleBody {
  return articleBodies[id] ?? {
    intro: "Resultados melhores surgem quando treino, recuperacao e rotina caminham juntos. O objetivo e tornar cada escolha mais simples e sustentavel.",
    highlight: "Consistencia e clareza vencem excesso de informacao.",
    sections: [
      {
        title: "Comece pelo essencial",
        paragraphs: ["Escolha uma meta, organize sua rotina e acompanhe sinais simples de progresso ao longo da semana."],
      },
    ],
    checklist: ["Defina uma meta", "Acompanhe sua evolucao", "Ajuste com paciencia"],
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({ id: article.id }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const article = articles.find((item) => item.id === id);

  if (!article) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = articles.find((item) => item.id === id);

  if (!article) notFound();

  const body = getArticleBody(article.id);
  const related = articles.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <>
      <article>
        <section className="container-page pt-6 md:pt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-limebrand transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao blog
          </Link>

          <div className="relative mt-6 overflow-hidden rounded-lg border border-white/12 bg-black">
            <Image src={article.image} alt={article.title} fill priority className="object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/84 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            <div className="relative grid min-h-[460px] gap-7 p-5 sm:min-h-[500px] sm:p-7 md:p-10 lg:min-h-[540px] xl:grid-cols-[1fr_320px] xl:p-12">
              <div className="flex max-w-4xl flex-col justify-end">
                <Badge>{article.category}</Badge>
                <h1 className="mt-5 text-balance text-3xl font-black leading-tight sm:text-4xl md:text-5xl xl:text-6xl">{article.title}</h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">{article.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/62 sm:gap-3 sm:text-sm">
                  <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2"><User className="h-4 w-4 text-limebrand" /> {article.author}</span>
                  <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2"><CalendarDays className="h-4 w-4 text-limebrand" /> {article.date}</span>
                  <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2"><Clock className="h-4 w-4 text-limebrand" /> {article.readTime} de leitura</span>
                  {article.city ? <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">{article.city}, {article.province ?? "Angola"}</span> : null}
                </div>
              </div>

              <aside className="hidden self-end rounded-lg border border-white/12 bg-black/45 p-5 backdrop-blur md:block">
                <p className="text-xs font-bold uppercase text-limebrand">Resumo rápido</p>
                <p className="mt-3 text-sm leading-6 text-white/70">{body.intro}</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="container-page py-8 md:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="mx-auto w-full max-w-[820px]">
              <div className="rounded-lg border border-limebrand/25 bg-limebrand/8 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-limebrand" />
                  <div>
                    <p className="text-xs font-bold uppercase text-limebrand">Ideia principal</p>
                    <p className="mt-2 text-base leading-7 text-white/82 sm:text-lg sm:leading-8">{body.highlight}</p>
                  </div>
                </div>
              </div>

              {article.sourceName ? (
                <div className="mt-5 rounded-lg border border-white/12 bg-white/[0.035] p-5 text-sm leading-6 text-white/62">
                  <p className="font-bold text-white">Fonte e atribuicao</p>
                  <p className="mt-2">
                    Conteudo editorial Noogym baseado em informacao factual de {article.sourceName}
                    {article.sourcePublishedAt ? `, publicada originalmente em ${article.sourcePublishedAt}` : ""}.
                    {article.sourceUrl ? " O texto nao reproduz integralmente a fonte externa." : ""}
                  </p>
                </div>
              ) : null}

              <div className="mt-8 space-y-10">
                {body.sections.map((section, index) => (
                  <section key={section.title} id={`secao-${index + 1}`} className="scroll-mt-28">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-limebrand text-sm font-black text-black sm:h-9 sm:w-9 sm:text-base">{index + 1}</span>
                      <h2 className="text-xl font-black sm:text-2xl md:text-3xl">{section.title}</h2>
                    </div>
                    <div className="space-y-5 text-base leading-8 text-white/70 md:text-lg md:leading-9">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <section id="acao" className="mt-10 scroll-mt-28 rounded-lg border border-white/12 bg-white/[0.035] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-limebrand" />
                  <h2 className="text-2xl font-black">Plano de ação</h2>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {body.checklist.map((item) => (
                    <p key={item} className="flex items-start gap-3 rounded-md border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/72">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-limebrand" />
                      {item}
                    </p>
                  ))}
                </div>
              </section>

              <section className="mt-10 border-t border-white/10 pt-8">
                <h2 className="text-2xl font-black">Conclusão</h2>
                <p className="mt-4 text-base leading-8 text-white/70 md:text-lg md:leading-9">
                  Evoluir no treino fica mais simples quando voce combina informacao de qualidade com acao consistente. Escolha um ponto deste artigo para aplicar hoje e acompanhe o impacto nas proximas semanas.
                </p>
              </section>
            </div>

            <aside className="grid gap-5 md:grid-cols-3 xl:sticky xl:top-24 xl:block xl:h-max xl:space-y-5">
              <div className="rounded-lg border border-white/12 bg-white/[0.035] p-5">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-limebrand" />
                  <h2 className="font-bold">Neste artigo</h2>
                </div>
                <nav className="mt-4 grid gap-2 text-sm text-white/62">
                  {body.sections.map((section, index) => (
                    <a key={section.title} href={`#secao-${index + 1}`} className="rounded-md px-3 py-2 transition hover:bg-white/8 hover:text-limebrand">{section.title}</a>
                  ))}
                  <a href="#acao" className="rounded-md px-3 py-2 transition hover:bg-white/8 hover:text-limebrand">Plano de ação</a>
                </nav>
              </div>

              <div className="rounded-lg border border-white/12 bg-white/[0.035] p-5">
                <h2 className="font-bold">Partilhar</h2>
                <a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`Leia este artigo da Noogym: /blog/${article.id}`)}`} className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-white/16 bg-white/[0.03] px-5 text-sm font-semibold text-white transition hover:border-limebrand/70 hover:text-limebrand">
                  <Share2 className="h-4 w-4" />
                  Enviar por e-mail
                </a>
              </div>

              <div className="rounded-lg border border-white/12 bg-white/[0.035] p-5">
                <h2 className="text-xl font-bold">Leia também</h2>
                <div className="mt-5 grid gap-4">
                  {related.map((item) => (
                    <Link key={item.id} href={`/blog/${item.id}`} className="rounded-md border border-white/10 bg-black/20 p-4 transition hover:border-limebrand/45">
                      <p className="text-xs font-bold uppercase text-limebrand">{item.category}</p>
                      <h3 className="mt-2 font-semibold leading-5">{item.title}</h3>
                      <p className="mt-2 text-xs text-white/45">{item.readTime} de leitura</p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <section className="container-page py-8">
        <CTASection title={<>Continue sua <span className="text-limebrand">evolução</span></>} text="Explore ginásios, planos e conteúdos Noogym para manter sua rotina em movimento." primary="Ver planos" secondary="Explorar ginásios" href="/planos" secondaryHref="/explorar-ginasios" />
      </section>
    </>
  );
}

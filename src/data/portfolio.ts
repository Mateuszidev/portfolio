export type Project = {
  title: string;
  description: string;
  period: string;
  stack: string[];
  metrics: string[];
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ContactLink = {
  label: string;
  href: string;
};

export const portfolio = {
  seo: {
    title: "Mateus Rodrigues Felix | Portfolio",
    description:
      "Portfolio em Next.js com projetos, experiencia, habilidades e contatos.",
  },
  hero: {
    availability: "Disponivel para projetos freelance e oportunidades full-stack.",
    name: "Mateus Rodrigues Félix",
    role: "Desenvolvedor full-stack em formacao, focado em interfaces rápidas, elegantes e funcionais.",
    intro:
      "Crio experiências web modernas com atenção à performance, clareza visual e organização de código para entregar produtos confiáveis, agradaveis de usar e fáceis de evoluír.",
    primaryCta: {
      label: "Ver projetos",
      href: "#projetos",
    },
    secondaryCta: {
      label: "Falar comigo",
      href: "#contato",
    },
    stats: [
      { label: "Projetos em destaque", value: "03" },
      { label: "Stack principal", value: "Next.js + TS" },
      { label: "Prioridade", value: "UX, performance e clareza" },
    ],
  },
  about: {
    title: "Sobre mim",
    text: "Sou um desenvolvedor que gosta de transformar ideias em interfaces objetivas, rápidas e agradaveis de usar. Prefiro soluções simples, com boa hierárquia visual e foco em resultado real para quem navega.",
    bullets: [
      "Estruturo páginas para serem fáceis de editar, manter e evoluír.",
      "Tenho atenção especial à responsividade, acessibilidade e legibilidade.",
      "Gosto de trabalhar com componentes claros e conteudo bem organizado.",
    ],
  },
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Java basico",
    "Spring Boot",
    "HTML",
    "CSS",
    "UI Design",
    "Responsive Design",
    "Performance Web",
    "Acessibilidade",
    "Git",
    "Figma",
    "PostgreSQL",
    "MySQL",
  ],
  experience: [
    {
      company: "Freelance",
      role: "Desenvolvedor Fullstack",
      period: "2025 - hoje",
      summary:
        "Desenvolvi uma pagina vitrine focada em automacao de pedidos, com navegacao rapida, experiencia acessivel e jornada de compra simples, incluindo integracao com carrinho e finalizacao via WhatsApp.",
      highlights: [
        "Estruturacao de interfaces reaproveitaveis.",
        "Melhoria de fluxo e experiencia nas paginas principais.",
        "Organizacao do codigo para manutencao mais simples.",
        "Implementacao de logica de negocio.",
      ],
    },
    {
      company: "Freelance",
      role: "Desenvolvedor Full-stack",
      period: "2025 - hoje",
      summary:
        "Neste projeto o objetivo foi automatizar pedidos de mercado. Implementei finalizacao via WhatsApp, integracao com banco de dados e uma dashboard para facilitar cadastro, edicao e controle de produtos.",
      highlights: [
        "Levantamento de necessidade e prototipacao inicial.",
        "Implementacao com foco em performance e automacao.",
        "Entrega com layout responsivo e conteudo escalavel.",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      title: "Sistema para automacao de pedidos",
      description:
        "Interface para vitrine de produtos com foco em navegacao fluida, clareza visual e escalabilidade de componentes.",
      period: "Projeto real",
      stack: ["Next.js", "PostgreSQL", "CSS Modules"],
      metrics: ["Layout responsivo", "Componentes reutilizaveis", "UX orientada a conversao"],
      href: "https://marketsystem-flax.vercel.app/",
    },
    {
      title: "Landing page de servico",
      description:
        "Pagina pensada para apresentar proposta de valor com secoes claras, CTA forte e carregamento rapido.",
      period: "Projeto real",
      stack: ["Next.js", "SEO", "Design System"],
      metrics: ["Alta legibilidade", "Boa hierarquia", "Facil edicao"],
      href: "https://smoke25hrs.vercel.app/",
    },
    {
      title: "Portfolio enxuto e objetivo",
      description:
        "Pagina autoral criada para apresentar repertorio tecnico, experiencia e projetos com uma leitura direta e profissional.",
      period: "Projeto real",
      stack: ["Next.js", "CSS", "UX", "UI"],
      metrics: ["Interface clara", "Fluxo funcional", "Base pronta para expansao"],
      href: "https://github.com/Mateuszidev",
    },
  ] satisfies Project[],
  contact: {
    title: "Vamos conversar",
    text: "Se voce procura alguem para construir interfaces rapidas, organizadas e com boa presenca visual, me chama pelos links abaixo.",
    links: [
      { label: "Email", href: "mailto:mateusvdg25@gmail.com" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mateus-rodrigues-f%C3%A9lix-225889335/",
      },
      { label: "GitHub", href: "https://github.com/Mateuszidev" },
      { label: "WhatsApp", href: "https://wa.me/5521979668909" },
    ] satisfies ContactLink[],
  },
} as const;

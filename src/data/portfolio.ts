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
    title: "Mateus Rodrigues | Portfolio",
    description:
      "Portfolio em Next.js com projetos, experiência, habilidades e contatos.",
  },
  hero: {
    availability: "Disponível para projetos freelance e oportunidades full-stack.",
    name: "Mateus Rodrigues",
    role: "Desenvolvedor Full-stack em formação, focado em interfaces rápidas e funcionais.",
    intro:
      "Crio experiências web modernas com atenção à performance, clareza visual e organização de código para que o produto seja fácil de manter.",
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
      { label: "Prioridade", value: "Velocidade e UX" },
    ],
  },
  about: {
    title: "Sobre mim",
    text: "Sou um desenvolvedor que gosta de transformar ideias em interfaces objetivas, rápidas e agradáveis de usar. Prefiro soluções simples, com boa hierarquia visual e foco em resultado real para quem navega.",
    bullets: [
      "Estruturo páginas para serem fáceis de editar e evoluir.",
      "Tenho atenção especial a responsividade, sem exagerar em dependências.",
      "Gosto de trabalhar com componentes claros e conteúdo bem organizado.",
    ],
  },
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Java básico",
    "Springboot",
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
      company: "freelance",
      role: "Desenvolvedor Full-stack",
      period: "2025 - hoje",
      summary:
        "Neste projeto criei uma página vitrine focada em automação, ao navegar pelo site você conta com uma experiência rápida e acessível. Nele integrei um carrinho com finalização via wpp",
      highlights: [
        "Estruturação de interfaces reaproveitáveis.",
        "Melhoria de fluxo e experiência em páginas principais.",
        "Organização do código para manutenção mais simples.",
      ],
    },
    {
      company: "freelance",
      role: "Desenvolvedor Full-stack",
      period: "2025 - HOJE",
      summary:
        "Neste projeto tive como objetivo automatizar pedidos de mercados. Nele adicionei finalização via WhatsApp, banco de dados e criei um dashboard para facilitação ao cadastrar/alterar produtos.",
      highlights: [
        "Levantamento da necessidade e prototipação.",
        "Implementação com foco em performance e automação.",
        "Entrega com layout responsivo e conteúdo escalável.",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      title: "Marketplace moderno",
      description:
        "Interface para vitrine de produtos com foco em navegação fluida, clareza visual e escalabilidade de componentes.",
      period: "Projeto real",
      stack: ["Next.js", "TypeScript", "CSS Modules"],
      metrics: ["Layout responsivo", "Componentes reutilizáveis", "UX orientada a conversão"],
      href: "https://github.com/seuusuario/marketplace",
    },
    {
      title: "Landing page de serviço",
      description:
        "Página pensada para apresentar proposta de valor com seções claras, CTA forte e carregamento rápido.",
      period: "Case de portfólio",
      stack: ["Next.js", "SEO", "Design System"],
      metrics: ["Alta legibilidade", "Boa hierarquia", "Fácil edição"],
      href: "https://github.com/seuusuario/landing-page",
    },
    {
      title: "Dashboard enxuto",
      description:
        "Painel com apresentação de dados e foco em leitura rápida, contraste e organização de blocos informativos.",
      period: "Estudo prático",
      stack: ["React", "TypeScript", "UI"],
      metrics: ["Interface clara", "Fluxo funcional", "Base pronta para expansão"],
      href: "https://github.com/seuusuario/dashboard",
    },
  ] satisfies Project[],
  contact: {
    title: "Vamos conversar",
    text: "Se você quer alguém para construir interfaces rápidas, organizadas e com boa presença visual, me chama pelos links abaixo.",
    links: [
      { label: "Email", href: "mateusvdg25@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mateus-rodrigues-f%C3%A9lix-225889335/" },
      { label: "GitHub", href: "https://github.com/Mateuszidev" },
      { label: "WhatsApp", href: "https://wa.me/5521979668909" },
    ] satisfies ContactLink[],
  },
} as const;

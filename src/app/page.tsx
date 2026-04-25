import Image from "next/image";
import { portfolio } from "@/data/portfolio";

function ContactIcon({ label }: { label: string }) {
  switch (label) {
    case "Email":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3.75 6.75h16.5a1.5 1.5 0 0 1 1.5 1.5v7.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25v-7.5a1.5 1.5 0 0 1 1.5-1.5Z" />
          <path d="m4.5 8.25 7.028 4.685a.84.84 0 0 0 .944 0L19.5 8.25" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.75 8.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
          <path d="M5.625 9.75h2.25v8.625h-2.25Z" />
          <path d="M10.875 9.75h2.156v1.178h.03c.3-.57 1.035-1.365 2.13-1.365 2.28 0 2.7 1.5 2.7 3.45v5.362h-2.25v-4.754c0-1.134-.02-2.592-1.58-2.592-1.582 0-1.824 1.236-1.824 2.51v4.836h-2.362Z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.25a9.75 9.75 0 0 0-3.084 19.001c.488.09.666-.212.666-.47l-.014-1.666c-2.709.588-3.281-1.306-3.281-1.306-.443-1.126-1.082-1.427-1.082-1.427-.884-.605.067-.593.067-.593.977.068 1.492 1.004 1.492 1.004.868 1.487 2.278 1.057 2.832.808.088-.629.34-1.058.619-1.302-2.163-.245-4.437-1.082-4.437-4.816 0-1.064.38-1.934 1.004-2.615-.101-.246-.435-1.235.095-2.574 0 0 .82-.262 2.688 1 .78-.217 1.617-.326 2.448-.33.831.004 1.668.113 2.45.33 1.867-1.262 2.686-1 2.686-1 .53 1.339.197 2.328.096 2.574.625.681 1.003 1.55 1.003 2.615 0 3.743-2.278 4.568-4.448 4.807.35.3.662.89.662 1.794l-.012 2.659c0 .26.176.564.672.468A9.75 9.75 0 0 0 12 2.25Z" />
        </svg>
      );
    case "WhatsApp":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.011 2.25A9.711 9.711 0 0 0 3.58 16.84L2.25 21.75l5.03-1.316a9.75 9.75 0 1 0 4.73-18.184Z" />
          <path d="M8.285 6.977c-.206-.458-.423-.467-.619-.475-.16-.007-.343-.007-.525-.007a1.01 1.01 0 0 0-.73.343c-.252.274-.96.937-.96 2.286s.982 2.65 1.12 2.835c.137.182 1.906 3.053 4.706 4.154 2.326.915 2.8.732 3.305.687.504-.046 1.623-.664 1.852-1.306.23-.64.23-1.191.16-1.306-.068-.114-.252-.182-.526-.32-.274-.137-1.624-.8-1.875-.892-.252-.091-.435-.136-.618.138-.183.274-.708.892-.868 1.075-.16.183-.32.206-.594.068-.274-.137-1.156-.426-2.203-1.36-.814-.726-1.364-1.622-1.524-1.896-.16-.274-.017-.422.12-.56.123-.122.274-.32.411-.48.137-.16.183-.274.274-.457.092-.183.046-.344-.022-.481-.068-.137-.609-1.51-.844-2.028Z" />
        </svg>
      );
    default:
      return null;
  }
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function Home() {
  const { about, contact, experience, hero, projects, skills } = portfolio;
  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#habilidades", label: "Stack" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <main className="portfolio-shell">
      <header className="topbar" aria-label="Navegacao principal">
        <a className="brand" href="#topo">
          <Image
            className="brand-image"
            src="/logo.png"
            alt="Logo Mateus Rodrigues"
            width={44}
            height={44}
            priority
          />
          <span className="brand-copy">
            <strong>Mateus Rodrigues</strong>
            <small>Portfolio Full-stack</small>
          </span>
        </a>

        <nav className="top-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="topo">
        <div className="hero-copy">
          <span className="availability">{hero.availability}</span>
          <p className="kicker">Portfolio</p>
          <h1>{hero.name}</h1>
          <h2>{hero.role}</h2>
          <p className="hero-text">{hero.intro}</p>

          <div className="hero-highlights" aria-label="Pontos fortes">
            <span>Interfaces com visual forte</span>
            <span>Codigo organizado e escalavel</span>
            <span>Performance e clareza na experiencia</span>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="button button-secondary" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Resumo profissional">
          <div className="hero-panel-grid">
            {hero.stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-note">
            <p>Este portfolio foi desenvolvido com Next.js</p>
            <span>
              Estrutura enxuta, visual refinado e foco em apresentar trabalho de
              forma objetiva para recrutadores e clientes.
            </span>
          </div>
        </aside>
      </section>

      <section className="section-grid" id="sobre">
        <div className="panel panel-accent">
          <SectionHeading eyebrow="Perfil" title={about.title} />
          <p className="body-copy">{about.text}</p>
        </div>

        <div className="panel">
          <SectionHeading
            eyebrow="Diferenciais"
            title="Minhas prioridades"
          />
          <ul className="feature-list">
            {about.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-stack" id="habilidades">
        <SectionHeading
          eyebrow="Stack"
          title="Tecnologias e habilidades"
          description=""
        />
        <div className="chip-grid">
          {skills.map((skill) => (
            <span className="chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section-stack" id="experiencia">
        <SectionHeading
          eyebrow="Experiência"
          title="Trajetória e entregas"
          description="Projetos desenvolvidos de forma autônoma."
        />
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-card" key={`${item.company}-${item.role}`}>
              <div className="timeline-header">
                <div>
                  <p>{item.company}</p>
                  <h3>{item.role}</h3>
                </div>
                <span>{item.period}</span>
              </div>
              <p className="body-copy">{item.summary}</p>
              <ul className="feature-list compact">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-stack" id="projetos">
        <SectionHeading
          eyebrow="Projetos"
          title="Cases para mostrar resultado"
          description="Cada card pode apontar para GitHub, deploy ao vivo, Behance ou qualquer link que faça sentido para você."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <span>{project.period}</span>
                <a href={project.href} target="_blank" rel="noreferrer">
                  Abrir projeto
                </a>
              </div>
              <h3>{project.title}</h3>
              <p className="body-copy">{project.description}</p>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <ul className="metric-list">
                {project.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contato">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title={contact.title}
            description={contact.text}
          />
        </div>
        <div className="contact-links">
          {contact.links.map((link) => (
            link.label === "Email" ? (
              <a
                key={link.label}
                className="contact-email"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <span>{link.label}</span>
                <strong>{link.href.replace(/^mailto:/, "")}</strong>
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <ContactIcon label={link.label} />
              </a>
            )
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>Disponivel para oportunidades freelance, estagio e projetos autorais.</p>
        <a href={contact.links[2]?.href} target="_blank" rel="noreferrer">
          Ver GitHub
        </a>
      </footer>
    </main>
  );
}

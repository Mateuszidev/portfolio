import { portfolio } from "@/data/portfolio";

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

  return (
    <main className="portfolio-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="availability">{hero.availability}</span>
          <p className="kicker">Portfolio</p>
          <h1>{hero.name}</h1>
          <h2>{hero.role}</h2>
          <p className="hero-text">{hero.intro}</p>

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
            <p>Estrutura editável</p>
            <span>
              Todo o conteúdo principal deste site pode ser ajustado em um único
              arquivo de dados.
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
            title="O que você pode destacar aqui"
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
          description="Uma lista rápida para comunicar repertório técnico sem poluir a leitura."
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
          description="Use esta área para resumir trabalhos, freelas, estágios ou projetos acadêmicos relevantes."
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
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span>{link.label}</span>
              <strong>{link.href.replace(/^mailto:/, "")}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

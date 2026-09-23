import { projects } from '../../data/projects.js'
import { useReveal } from '../../hooks/useReveal.js'
import './Projects.css'

export default function Projects() {
  const scopeRef = useReveal()

  return (
    <section id="projetos" className="projects" ref={scopeRef}>
      <div className="container">
        <div className="section-heading reveal">
          <h2>Projetos que transformam ideias em experiências digitais</h2>
          <p>
            A JRD TECH ainda está construindo seu portfólio de clientes. Os projetos abaixo são
            demonstrativos, usados para ilustrar o tipo de trabalho desenvolvido.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="card projects__card reveal">
              <div className="projects__thumb" aria-hidden="true">
                <span>{project.category}</span>
              </div>
              {project.demo && <span className="projects__badge">Projeto demonstrativo</span>}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

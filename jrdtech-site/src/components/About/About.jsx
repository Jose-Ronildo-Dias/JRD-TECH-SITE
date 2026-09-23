import { company } from '../../data/company.js'
import { useReveal } from '../../hooks/useReveal.js'
import founderPhoto from '../../assets/founder.jpg'
import './About.css'

export default function About() {
  const scopeRef = useReveal()

  return (
    <section id="sobre" className="about" ref={scopeRef}>
      <div className="container about__grid">
        <div className="about__text reveal">
          <div className="section-heading">
            <h2>Quem somos</h2>
          </div>
          <p>
            A JRD TECH nasceu em {company.founded} a partir de uma ideia simples: transformar
            necessidades e ideias em soluções digitais capazes de gerar valor para pessoas e
            negócios.
          </p>
          <p>
            Criada por {company.founder}, a empresa atua no desenvolvimento de experiências
            digitais modernas, funcionais e personalizadas — de sites institucionais e landing
            pages a lojas virtuais e soluções sob medida.
          </p>
          <p>
            Mais do que desenvolver páginas, buscamos entender o negócio, os objetivos e o
            público de cada cliente, para transformar tecnologia em uma ferramenta que realmente
            faça sentido.
          </p>
        </div>

        <div className="about__visual reveal">
          <figure className="about__photo">
            <img src={founderPhoto} alt={`${company.founder}, fundador da ${company.name}`} loading="lazy" />
            <figcaption>
              <span className="about__photo-name">{company.founder}</span>
              <span className="about__photo-role">Fundador da {company.name}</span>
            </figcaption>
          </figure>

          <div className="about__card">
            <div className="about__card-row">
              <span className="about__card-label">Empresa</span>
              <span className="about__card-value">{company.name}</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">Fundador</span>
              <span className="about__card-value">{company.founder}</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">Fundação</span>
              <span className="about__card-value">Junho de {company.founded}</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">Propósito</span>
              <span className="about__card-value">Transformar ideias em soluções digitais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

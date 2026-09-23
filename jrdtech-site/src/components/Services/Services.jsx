import { services } from '../../data/services.js'
import { whatsappLink } from '../../data/company.js'
import { IconCheck } from '../icons.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import './Services.css'

export default function Services() {
  const scopeRef = useReveal()

  return (
    <section id="servicos" className="services section-alt" ref={scopeRef}>
      <div className="container">
        <div className="section-heading reveal">
          <h2>Soluções digitais para o seu negócio</h2>
          <p>
            Do primeiro contato com seu cliente até a experiência de compra, criamos soluções
            digitais pensadas para o seu negócio.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.id} className="card services__card reveal">
              <h3>{service.title}</h3>
              <p className="services__description">{service.description}</p>

              <ul className="services__benefits">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>
                    <IconCheck className="services__check" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(service.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary services__cta"
              >
                {service.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

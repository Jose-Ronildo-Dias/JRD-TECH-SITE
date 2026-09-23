import { whatsappLink, whatsappMessages } from '../../data/company.js'
import { IconWhatsApp } from '../icons.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import './CTASection.css'

export default function CTASection() {
  const scopeRef = useReveal()

  return (
    <section className="cta-section" ref={scopeRef}>
      <div className="container">
        <div className="cta-section__panel reveal">
          <div>
            <h2>Tem uma ideia? Vamos transformar em realidade.</h2>
            <p>
              Conte para a JRD TECH o que você precisa. Vamos entender seu projeto e encontrar
              uma solução digital adequada para o seu negócio.
            </p>
          </div>
          <a
            href={whatsappLink(whatsappMessages.intro)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary cta-section__btn"
          >
            <IconWhatsApp />
            Falar com a JRD TECH
          </a>
        </div>
      </div>
    </section>
  )
}

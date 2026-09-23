import { useReveal } from '../../hooks/useReveal.js'
import './MissionVision.css'

export default function MissionVision() {
  const scopeRef = useReveal()

  return (
    <section className="mission-vision section-alt" ref={scopeRef}>
      <div className="container mission-vision__grid">
        <div className="mission-vision__item reveal">
          <h3>Nossa missão</h3>
          <p>
            Transformar ideias, necessidades e desafios em soluções digitais modernas,
            funcionais e acessíveis.
          </p>
        </div>
        <div className="mission-vision__item reveal">
          <h3>Nossa visão</h3>
          <p>
            Tornar a tecnologia mais acessível para profissionais e empresas, ajudando negócios
            a construir uma presença digital profissional e preparada para crescer.
          </p>
        </div>
      </div>
    </section>
  )
}

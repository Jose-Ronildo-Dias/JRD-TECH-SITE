import { audiences } from '../../data/audiences.js'
import { useReveal } from '../../hooks/useReveal.js'
import './Audiences.css'

export default function Audiences() {
  const scopeRef = useReveal()

  return (
    <section className="audiences" ref={scopeRef}>
      <div className="container">
        <div className="section-heading reveal">
          <h2>Desenvolvemos para diferentes negócios</h2>
          <p>
            Estes são alguns dos perfis que a JRD TECH atende — a lista não se limita a eles.
          </p>
        </div>

        <div className="audiences__grid">
          {audiences.map((audience) => (
            <div key={audience.title} className="audiences__item reveal">
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

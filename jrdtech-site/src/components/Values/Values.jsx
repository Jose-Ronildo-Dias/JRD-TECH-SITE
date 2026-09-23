import { values } from '../../data/values.js'
import { useReveal } from '../../hooks/useReveal.js'
import './Values.css'

export default function Values() {
  const scopeRef = useReveal()

  return (
    <section className="values" ref={scopeRef}>
      <div className="container">
        <div className="section-heading reveal">
          <h2>Nossos valores</h2>
        </div>

        <div className="values__grid">
          {values.map((value) => (
            <div key={value.title} className="card values__card reveal">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

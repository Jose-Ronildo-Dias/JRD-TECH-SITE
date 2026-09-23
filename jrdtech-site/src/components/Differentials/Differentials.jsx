import { differentials } from '../../data/differentials.js'
import { useReveal } from '../../hooks/useReveal.js'
import './Differentials.css'

export default function Differentials() {
  const scopeRef = useReveal()

  return (
    <section id="diferenciais" className="differentials section-alt" ref={scopeRef}>
      <div className="container">
        <div className="section-heading reveal">
          <h2>Por que escolher a JRD TECH?</h2>
        </div>

        <div className="differentials__grid">
          {differentials.map((item) => (
            <div key={item.title} className="differentials__item reveal">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

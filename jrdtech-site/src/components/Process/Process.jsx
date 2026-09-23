import { processSteps } from '../../data/process.js'
import { useReveal } from '../../hooks/useReveal.js'
import './Process.css'

export default function Process() {
  const scopeRef = useReveal()

  return (
    <section id="processo" className="process section-alt" ref={scopeRef}>
      <div className="container">
        <div className="section-heading reveal">
          <h2>Do planejamento ao lançamento</h2>
        </div>

        <ol className="process__timeline">
          {processSteps.map((step, index) => (
            <li key={step.number} className="process__step reveal" style={{ transitionDelay: `${index * 60}ms` }}>
              <span className="process__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

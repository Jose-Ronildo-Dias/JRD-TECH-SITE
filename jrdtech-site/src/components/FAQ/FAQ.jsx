import { useState } from 'react'
import { faqItems } from '../../data/faq.js'
import { IconChevronDown } from '../icons.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import './FAQ.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const scopeRef = useReveal()

  return (
    <section id="faq" className="faq" ref={scopeRef}>
      <div className="container">
        <div className="section-heading reveal">
          <h2>Perguntas frequentes</h2>
        </div>

        <div className="faq__list reveal">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div key={item.question} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="faq__question"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    {item.question}
                    <IconChevronDown className="faq__icon" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq__answer"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

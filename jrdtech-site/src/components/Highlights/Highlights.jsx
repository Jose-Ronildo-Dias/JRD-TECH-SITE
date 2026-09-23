import { company } from '../../data/company.js'
import './Highlights.css'

const items = [
  {
    title: company.name,
    detail: 'Soluções digitais sob medida',
  },
  {
    title: `Desde ${company.founded}`,
    detail: 'Construindo soluções digitais',
  },
  {
    title: 'Projetos personalizados',
    detail: 'Desenvolvidos de acordo com cada negócio',
  },
]

export default function Highlights() {
  return (
    <section className="highlights section-alt" aria-label="Destaques da JRD TECH">
      <div className="container highlights__grid">
        {items.map((item) => (
          <div key={item.title} className="highlights__item">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

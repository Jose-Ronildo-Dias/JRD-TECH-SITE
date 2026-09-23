import { whatsappLink, whatsappMessages } from '../../data/company.js'
import HeroGraphic from './HeroGraphic.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <h1>Transformamos ideias em soluções digitais.</h1>
          <p className="hero__subheadline">
            Desenvolvemos sites, landing pages, e-commerces e soluções digitais personalizadas
            para profissionais e empresas que querem transformar sua presença online.
          </p>
          <div className="hero__actions">
            <a href={whatsappLink(whatsappMessages.general)} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </a>
            <a href="#servicos" className="btn btn-secondary">
              Conheça nossos serviços
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <HeroGraphic />
        </div>
      </div>
    </section>
  )
}

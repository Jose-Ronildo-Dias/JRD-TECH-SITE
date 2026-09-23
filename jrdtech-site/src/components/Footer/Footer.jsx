import { company, isConfigured } from '../../data/company.js'
import logoMark from '../../assets/logo-mark.png'
import './Footer.css'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__logo">
            <img src={logoMark} alt="" className="site-header__mark" />
            <span>{company.name}</span>
          </div>
          <p>Transformando ideias em soluções digitais.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Links do rodapé">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <span>WhatsApp: {company.whatsappDisplay}</span>
          {isConfigured(company.instagramUrl) && (
            <a href={company.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
          {isConfigured(company.email) && <a href={`mailto:${company.email}`}>{company.email}</a>}
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {year} {company.name}. Todos os direitos reservados.</span>
        <span>Desenvolvido pela {company.name}</span>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import { IconMenu, IconClose } from '../icons.jsx'
import logoMark from '../../assets/logo-mark.png'
import './Header.css'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Processo' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#diferenciais', label: 'Por que a JRD TECH' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#inicio" className="site-header__logo" onClick={() => setOpen(false)}>
          <img src={logoMark} alt="" className="site-header__mark" />
          <span>JRD TECH</span>
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contato" className="btn btn-primary site-header__cta">
          Solicitar orçamento
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <div id="mobile-nav" className={`site-header__mobile ${open ? 'is-open' : ''}`}>
        <nav aria-label="Navegação mobile">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contato" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>
          Solicitar orçamento
        </a>
      </div>
    </header>
  )
}

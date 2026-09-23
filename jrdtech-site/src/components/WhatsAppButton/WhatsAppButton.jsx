import { whatsappLink, whatsappMessages } from '../../data/company.js'
import { IconWhatsApp } from '../icons.jsx'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar com a JRD TECH pelo WhatsApp"
    >
      <IconWhatsApp />
    </a>
  )
}

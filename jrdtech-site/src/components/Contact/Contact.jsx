import { useState } from 'react'
import { company, whatsappLink, whatsappMessages, isConfigured } from '../../data/company.js'
import { IconWhatsApp } from '../icons.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import './Contact.css'

const projectTypes = [
  'Site institucional',
  'Landing page',
  'E-commerce',
  'Sistema personalizado',
  'Outro',
]

const initialForm = {
  name: '',
  email: '',
  whatsapp: '',
  projectType: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Informe seu nome completo.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Informe um e-mail válido.'
  }

  if (values.whatsapp.replace(/\D/g, '').length < 10) {
    errors.whatsapp = 'Informe um número de WhatsApp válido, com DDD.'
  }

  if (!values.projectType) {
    errors.projectType = 'Selecione o tipo de projeto.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Conte um pouco mais sobre o seu projeto.'
  }

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success

  const scopeRef = useReveal()

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setStatus('idle')
      return
    }

    // Ponto de integração futura: aqui o formulário pode ser conectado a uma
    // API própria, a um serviço de formulário (ex.: Formspree, Resend),
    // a um envio de e-mail ou a um CRM. Por enquanto, nenhuma integração
    // funcional foi implementada — apenas a validação de frontend.
    setStatus('success')
    setValues(initialForm)
  }

  return (
    <section id="contato" className="contact section-alt" ref={scopeRef}>
      <div className="container contact__grid">
        <div className="contact__intro reveal">
          <div className="section-heading">
            <h2>Vamos conversar sobre seu projeto?</h2>
            <p>
              Está pensando em criar um site, uma loja virtual ou uma solução digital para o seu
              negócio? Entre em contato com a JRD TECH.
            </p>
          </div>

          <a
            href={whatsappLink(whatsappMessages.intro)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary contact__whatsapp"
          >
            <IconWhatsApp />
            Falar pelo WhatsApp
          </a>

          <dl className="contact__details">
            <div>
              <dt>WhatsApp</dt>
              <dd>{company.whatsappDisplay}</dd>
            </div>
            {isConfigured(company.email) && (
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
            )}
          </dl>
        </div>

        <form className="contact__form reveal" onSubmit={handleSubmit} noValidate>
          <div className="contact__field">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span id="name-error" className="contact__error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="contact__field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className="contact__error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="contact__field">
            <label htmlFor="whatsapp">WhatsApp</label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              autoComplete="tel"
              placeholder="(19) 90000-0000"
              value={values.whatsapp}
              onChange={handleChange}
              aria-invalid={Boolean(errors.whatsapp)}
              aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
            />
            {errors.whatsapp && (
              <span id="whatsapp-error" className="contact__error">
                {errors.whatsapp}
              </span>
            )}
          </div>

          <div className="contact__field">
            <label htmlFor="projectType">Tipo de projeto</label>
            <select
              id="projectType"
              name="projectType"
              value={values.projectType}
              onChange={handleChange}
              aria-invalid={Boolean(errors.projectType)}
              aria-describedby={errors.projectType ? 'projectType-error' : undefined}
            >
              <option value="">Selecione uma opção</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <span id="projectType-error" className="contact__error">
                {errors.projectType}
              </span>
            )}
          </div>

          <div className="contact__field contact__field--full">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span id="message-error" className="contact__error">
                {errors.message}
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-primary btn-block contact__submit">
            Solicitar orçamento
          </button>

          <div className="contact__status" role="status" aria-live="polite">
            {status === 'success' &&
              'Mensagem validada com sucesso. Para agilizar o atendimento, envie também pelo WhatsApp.'}
          </div>
        </form>
      </div>
    </section>
  )
}

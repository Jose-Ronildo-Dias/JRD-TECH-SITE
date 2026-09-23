// Configuração central da JRD TECH.
// Altere os valores abaixo para atualizar as informações em todo o site.

export const company = {
  name: 'JRD TECH',
  founder: 'José Ronildo Dias',
  founded: '2025',
  tagline: 'Sua ideia. Nossa tecnologia.',

  // WhatsApp: apenas números, com código do país (55) + DDD + número.
  whatsappNumber: '5519981068664',
  whatsappDisplay: '+55 19 98106-8664',

  // Instagram ainda não informado. Substitua a URL abaixo quando disponível.
  // Exemplo: 'https://instagram.com/jrdtech'
  instagramUrl: 'INSIRA_AQUI_O_INSTAGRAM_DA_JRD_TECH',

  // E-mail comercial ainda não informado. Substitua quando disponível.
  // Exemplo: 'contato@jrdtech.com.br'
  email: 'INSIRA_AQUI_O_EMAIL_DA_JRD_TECH',
}

// Gera um link do WhatsApp com mensagem pré-definida.
export function whatsappLink(message) {
  const base = `https://wa.me/${company.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const whatsappMessages = {
  general: 'Olá! Conheci a JRD TECH pelo site e gostaria de solicitar um orçamento.',
  intro: 'Olá! Conheci a JRD TECH pelo site e gostaria de conversar sobre um projeto.',
}

// Retorna true se o valor ainda é um placeholder não configurado.
export function isConfigured(value) {
  return Boolean(value) && !value.startsWith('INSIRA_AQUI')
}

# JRD TECH — Site institucional

Site institucional oficial da **JRD TECH**, empresa de tecnologia fundada em junho de 2025 por
**José Ronildo Dias**. Single page moderna, responsiva e construída para apresentar a empresa,
seus serviços e gerar contato comercial via WhatsApp e formulário.

## Sobre a JRD TECH

A JRD TECH transforma ideias em soluções digitais: sites institucionais, landing pages,
e-commerces e soluções personalizadas para profissionais autônomos, pequenas empresas,
advogados, dentistas, clínicas, empreendedores e outros negócios que precisam de presença
digital.

## Tecnologias utilizadas

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- JavaScript (JSX)
- CSS3 puro (design tokens via custom properties, sem framework de UI)
- Google Fonts: **Space Grotesk** (títulos) e **Inter** (texto)

Não há dependências externas de UI ou animação — o projeto é intencionalmente enxuto para
manter o carregamento rápido.

## Como instalar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
```

## Como executar em desenvolvimento

```bash
npm run dev
```

O site ficará disponível em `http://localhost:5173`.

## Como gerar a versão de produção

```bash
npm run build
```

Os arquivos otimizados são gerados na pasta `dist/`. Para pré-visualizar o build localmente:

```bash
npm run preview
```

## Estrutura do projeto

```text
src/
├── components/          # Um componente por seção do site
│   ├── Header/
│   ├── Hero/
│   ├── Highlights/       # Indicadores logo após o Hero
│   ├── About/             # "Quem somos"
│   ├── MissionVision/     # Missão e visão
│   ├── Values/             # Nossos valores
│   ├── Services/           # Serviços oferecidos
│   ├── Audiences/          # Público-alvo
│   ├── Process/            # Linha do tempo "Como funciona"
│   ├── Projects/           # Portfólio (demonstrativo)
│   ├── Differentials/      # "Por que escolher a JRD TECH"
│   ├── CTASection/         # "Tem uma ideia?"
│   ├── FAQ/
│   ├── Contact/            # Formulário + WhatsApp
│   ├── Footer/
│   ├── WhatsAppButton/     # Botão flutuante
│   └── icons.jsx           # Ícones SVG reutilizados
├── data/                 # Conteúdo do site (textos, listas, configuração)
│   └── company.js         # Configuração central da empresa
├── hooks/
│   └── useReveal.js       # Animação de entrada ao rolar a página
├── styles/
│   └── index.css          # Tokens de design, reset, utilitários globais
├── App.jsx
└── main.jsx
```

Cada seção é um componente independente com seu próprio arquivo CSS, o que facilita alterações
pontuais sem afetar o restante do site.

## Configuração central da empresa

Todas as informações de contato ficam centralizadas em `src/data/company.js`. Alterar um valor
ali atualiza automaticamente todas as seções do site (cabeçalho, hero, contato, rodapé e botão
flutuante do WhatsApp).

### Como alterar o WhatsApp

Edite `whatsappNumber` (apenas números, com código do país) e `whatsappDisplay` (formato
legível) em `src/data/company.js`:

```javascript
whatsappNumber: '5519981068664',
whatsappDisplay: '+55 19 98106-8664',
```

### Como alterar o Instagram

O Instagram ainda não foi informado. Quando disponível, substitua o valor de `instagramUrl` em
`src/data/company.js` pela URL completa do perfil:

```javascript
instagramUrl: 'https://instagram.com/seu_usuario',
```

Enquanto o valor permanecer como `'INSIRA_AQUI_O_INSTAGRAM_DA_JRD_TECH'`, o link de Instagram
fica automaticamente oculto no rodapé.

### Como alterar o e-mail

O e-mail comercial ainda não foi informado. Quando disponível, substitua `email` em
`src/data/company.js`:

```javascript
email: 'contato@jrdtech.com.br',
```

Enquanto o valor permanecer como `'INSIRA_AQUI_O_EMAIL_DA_JRD_TECH'`, o e-mail fica
automaticamente oculto na seção de contato e no rodapé.

## Como adicionar novos projetos ao portfólio

Os projetos exibidos na seção "Projetos" ficam em `src/data/projects.js`. Para adicionar um
projeto real, inclua um novo objeto no array:

```javascript
{
  id: 'nome-unico-do-projeto',
  category: 'Site institucional', // ou 'Landing page', 'E-commerce', etc.
  title: 'Nome do cliente ou projeto',
  description: 'Descrição curta do projeto.',
  demo: false, // false remove o selo "Projeto demonstrativo"
}
```

## Formulário de contato

O formulário em `src/components/Contact/Contact.jsx` já possui validação de frontend (nome,
e-mail, WhatsApp, tipo de projeto e mensagem). Ele ainda não está conectado a um backend — o
ponto de integração está marcado com um comentário `// Ponto de integração futura` dentro da
função `handleSubmit`, pronto para receber uma API própria, um serviço de formulários, um envio
de e-mail ou um CRM.

## Deploy

O projeto está pronto para deploy em qualquer serviço de hospedagem de sites estáticos.

### Vercel (recomendado)

1. Suba o projeto para um repositório Git (GitHub, GitLab ou Bitbucket).
2. Importe o repositório em [vercel.com](https://vercel.com/).
3. A Vercel detecta automaticamente o Vite; o arquivo `vercel.json` incluído já define o
   comando de build (`npm run build`) e a pasta de saída (`dist`).
4. Clique em **Deploy**.

### Netlify

1. Comando de build: `npm run build`
2. Pasta de publicação: `dist`

### Hostinger (ou outro hospedeiro estático)

1. Rode `npm run build` localmente.
2. Envie o conteúdo da pasta `dist/` via gerenciador de arquivos ou FTP para o diretório
   público do hospedeiro.

## Licença

Projeto de uso interno da JRD TECH. Todos os direitos reservados.

// ============================================================================
//  CONFIGURACAO EDITAVEL DA LANDING PAGE
//  Edite os textos/flags abaixo. Nada aqui inventa preco ou promete cura.
// ============================================================================

export const siteConfig = {
  // --- MARCA / LOGO --------------------------------------------------------
  brand: {
    logo: {
      src: "/images/logo-benevento.webp",
      alt: "Licemara Benevento — Fisioterapia Integrativa e Quiropraxia",

      /**
       * true quando o arquivo da logo JA TEM o fundo teal embutido (a versao
       * nova, branca sobre teal). Nesse caso o header inteiro fica na cor
       * --brand para o retangulo da imagem sumir dentro da barra.
       *
       * false quando a logo e teal sobre fundo transparente (versao antiga):
       * o header fica branco, senao a marca desaparece no fundo.
       */
      hasSolidBackground: true,
    },
  },

  // --- OFERTA (perto dos CTAs) ---------------------------------------------
  // Sem valores: preco e negociado na conversa do WhatsApp, nao na pagina.
  // O que a pessoa ganha ao clicar continua explicito — o que some e so o
  // numero, que na landing filtrava clique antes da conversa comecar.
  offer: {
    enabled: true,
    label: "Avaliação inicial completa — cerca de 90 minutos",
    subtext: "Histórico, testes posturais e um plano de tratamento feito para o seu caso.",

    // Badge do topo do hero.
    heroBadge: "Especialista em dor de coluna há mais de 15 anos",
  },

  // --- URGENCIA (honesta e editavel — sem afirmacoes falsas) ---------------
  urgency: {
    enabled: true,
    text: "Vagas limitadas na agenda desta semana — garanta o seu horário.",
  },

  // --- PROVA / CREDIBILIDADE ----------------------------------------------
  // Use apenas o que e verificavel. Nada aqui e numero inventado.
  trust: [
    "Fisioterapeuta registrada no CREFITO-3",
    "Mais de 15 anos tratando coluna",
    "Em frente à Estação de Várzea Paulista",
    "Estacionamento no local",
  ],

  // --- COMPLIANCE: fotos antes/depois -------------------------------------
  // Fotos de antes/depois tem restricao na publicidade de fisioterapia
  // (COFFITO/CREFITO). Defina false para ocultar a secao inteira.
  showBeforeAfterPhotos: true,

  // --- Disclaimer (manter sempre — nao prometer cura) ----------------------
  resultsDisclaimer:
    "Os resultados variam de pessoa para pessoa e dependem de cada caso. As imagens e relatos são ilustrativos e não representam garantia de resultado.",
} as const

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
  // Sem valores perto dos botoes: ali o numero filtrava clique antes da
  // conversa comecar. O preco aparece so onde a pessoa foi procurar por ele —
  // no FAQ e no comparativo com a cirurgia (ver `pricing` abaixo).
  offer: {
    enabled: true,
    label: "Avaliação inicial completa — cerca de 90 minutos",
    subtext: "Histórico, testes posturais e um plano de tratamento feito para o seu caso.",

    // Badge do topo do hero.
    heroBadge: "Especialista em dor de coluna há mais de 15 anos",
  },

  // --- VALORES (FAQ "Quanto custa?" + secao de comparativo) ----------------
  // Preco e comparacao com cirurgia sao sensiveis na publicidade de
  // fisioterapia, assim como as fotos de antes/depois. Defina false para tirar
  // os valores do FAQ e a secao de comparativo inteira.
  pricing: {
    enabled: true,

    // Um item por forma de pagamento. Para acrescentar (ex.: cartao), e so
    // incluir outro item — o FAQ junta com "ou": "R$ 260 no PIX ou ...".
    evaluation: [{ value: "R$ 260", payment: "no PIX" }],

    // Referencia de mercado para o comparativo: cirurgia de coluna particular.
    surgery: {
      label: "Cirurgia de coluna (particular)",
      value: "R$ 30 a 35 mil",
    },

    // Tratamento com a maca de flexo-distracao. `percentOfSurgery` controla a
    // largura da barra no grafico — mantenha coerente com o texto.
    treatment: {
      label: "Tratamento com a maca de flexo-distração",
      value: "Menos de 5% disso",
      percentOfSurgery: 5,
    },
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

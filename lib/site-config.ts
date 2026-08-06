// ============================================================================
//  CONFIGURACAO EDITAVEL DA LANDING PAGE
//  Edite os textos/flags abaixo. Nada aqui inventa preco ou promete cura.
// ============================================================================

export const siteConfig = {
  // --- OFERTA (perto dos CTAs) ---------------------------------------------
  offer: {
    enabled: true,
    label: "Avaliação inicial: R$ 260 no PIX",
    subtext: "Cerca de 90 min: histórico, testes posturais e um plano feito para você.",

    // [TESTE A/B] Preco no TOPO do hero (primeira coisa que a pessoa ve).
    // false = o preco aparece so ABAIXO do botao, como transparencia.
    // Em trafego pago frio, preco no topo costuma filtrar cliques; deixe false
    // para volume de leads, true para leads mais qualificados.
    showPriceInHeroBadge: false,

    // Badge do topo quando showPriceInHeroBadge = false.
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

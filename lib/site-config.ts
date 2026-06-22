// ============================================================================
//  CONFIGURACAO EDITAVEL DA LANDING PAGE
//  Edite os textos/flags abaixo. Nada aqui inventa preco ou promete cura.
//  (Decisoes pendentes do cliente estao marcadas com <DEFINIR>.)
// ============================================================================

export const siteConfig = {
  // --- OFERTA (acima da dobra + perto dos CTAs) ----------------------------
  // [DECISAO PENDENTE] Diga se a avaliacao e gratuita ou o valor.
  // Ex.: "Avaliacao inicial gratuita" | "Avaliacao inicial: R$ 120"
  offer: {
    enabled: true,
    label: "Avaliação inicial: <DEFINIR>",
    subtext: "Cerca de 60 min: histórico, testes posturais e um plano feito para você.",
  },

  // --- URGENCIA (honesta e editavel — sem afirmacoes falsas) ---------------
  // [DECISAO PENDENTE] Use algo verdadeiro: vagas limitadas na semana,
  // bonus na 1a sessao, etc. Deixe enabled: false para esconder.
  urgency: {
    enabled: true,
    text: "Vagas limitadas na agenda desta semana — garanta o seu horário.",
  },

  // --- COMPLIANCE: fotos antes/depois (item L) -----------------------------
  // Fotos de antes/depois tem restricao na publicidade de fisioterapia
  // (COFFITO/CREFITO). DECISAO HUMANA: defina false para ocultar a secao
  // inteira de "Transformacoes dos Nossos Pacientes".
  showBeforeAfterPhotos: true,

  // --- Disclaimer (manter sempre — nao prometer cura) ----------------------
  resultsDisclaimer:
    "Os resultados variam de pessoa para pessoa e dependem de cada caso. As imagens e relatos são ilustrativos e não representam garantia de resultado.",
} as const

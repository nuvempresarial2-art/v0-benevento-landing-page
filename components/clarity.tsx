"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/lib/site-config"

/**
 * Microsoft Clarity: gravacao de sessoes e mapa de rolagem.
 *
 * - Liga so quando siteConfig.analytics.clarityProjectId esta preenchido.
 * - NAO carrega na /agendar: la a pagina vive menos de um segundo e cada
 *   requisicao a mais disputa rede com o PageView do Meta e a conversao do
 *   Google, que precisam sair antes do redirect (ver agendar-redirect.tsx).
 * - lazyOnload: entra depois de a pagina carregar, sem pesar no LCP do hero.
 */
export function Clarity() {
  const pathname = usePathname()
  const projectId: string = siteConfig.analytics.clarityProjectId

  // O ID vai para dentro de um <script>: so aceita o formato do Clarity.
  if (!/^[a-z0-9]+$/i.test(projectId) || pathname.startsWith("/agendar")) return null

  return (
    <Script id="microsoft-clarity" strategy="lazyOnload">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${projectId}");
      `}
    </Script>
  )
}

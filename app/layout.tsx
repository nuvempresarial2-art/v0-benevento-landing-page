import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tratamento para Dor nas Costas e Coluna em Varzea Paulista | Benevento Fisioterapia",
  description:
    "Alivio especializado para dor nas costas, pescoco e coluna em Varzea Paulista. Quiropraxia instrumental, RPG e fisioterapia integrativa. Agende sua avaliacao pelo WhatsApp.",
  keywords:
    "fisioterapia varzea paulista, quiropraxia varzea paulista, dor nas costas, dor na coluna, RPG, tratamento coluna, fisioterapeuta varzea paulista, dor cervical, lombalgia",
  authors: [{ name: "Dra. Licemara Benevento" }],
  openGraph: {
    title: "Tratamento para Dor nas Costas em Varzea Paulista | Benevento",
    description: "Alivio especializado para dor nas costas e coluna. Quiropraxia, RPG e fisioterapia integrativa.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#104a50", // teal da logo (--brand)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/*
          O beacon de conversao percorre dois hosts de terceiros: o script vem de
          connect.facebook.net e o evento em si vai para www.facebook.com/tr.
          Na pagina-ponte /agendar a aba e destruida poucas centenas de ms depois
          do carregamento, entao pagar DNS + TLS ali dentro custa a conversao.
          Abrir as duas conexoes desde o parse do HTML tira isso do caminho.
        */}
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.facebook.com" />

        {/*
          Facebook Pixel.

          strategy="beforeInteractive" (e NAO afterInteractive) porque o snippet
          precisa estar no HTML inicial: com afterInteractive o Next so injetava
          a tag depois da hidratacao, entao na /agendar o fbevents.js comecava a
          baixar tarde demais e o PageView morria no redirect. Esta estrategia so
          funciona no layout raiz — mantenha o Script aqui.
        */}
        <Script id="facebook-pixel" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1298130068771467');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1298130068771467&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Google Ads (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11438469662" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11438469662');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PPFMNS4T');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPFMNS4T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}

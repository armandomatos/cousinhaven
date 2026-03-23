import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://niamatos.com/" />
        <meta name="robots" content="index, follow" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R5K0YH9SV8"
        ></script>
      </Head>
      <body className="bg-background text-foreground">
        <Main />
        <NextScript />
        {/* Google Analytics config */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R5K0YH9SV8');
            `,
          }}
        />
      </body>
    </Html>
  );
}

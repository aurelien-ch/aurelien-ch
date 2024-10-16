import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { AppProps, AppType } from "next/app";

import translations from "../../public/locales/en/common.json";

const MyDocument = (props: DocumentInitialProps) => {
  return (
    <Html lang="en">
      <Head>
        {props.styles}
        <meta property="og:title" content={translations._app.title} />
        <meta property="og:description" content={translations._app.description} />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content={translations._app.title} />
        <meta name="twitter:description" content={translations._app.description} />
        <meta name="twitter:image" content="" />
        <meta name="twitter:image:alt" content="" />
        <link rel="preload" href="/fonts/Poppins.otf" as="font" crossOrigin="" type="font/otf" />
        <link rel="canonical" href="" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: AppType) => (props: AppProps) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;

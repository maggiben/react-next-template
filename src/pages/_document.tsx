import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
// import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { nextConfigVariables } from '@utils/index';;

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <link
           href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
           rel="stylesheet"
         />
         <link
           href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
           rel="stylesheet"
         />
        {/* Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q0FJ5LR0PR"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  window.dataLayer.push(arguments);
                }
                gtag('js', new Date());
                
                gtag('config', '${nextConfigVariables.gtmId}', { 'debug_mode':true });
        `,
        }} />    
      </Head>
      <body style={{ margin: 0 }}>
        <Main />
        <NextScript />
        {/* <!-- Google Analytics 4 - noscript tracking pixel --> */}
        <noscript>
          <img
            src="https://www.google-analytics.com/collect?v=1&t=event&tid=YOUR_ACTUAL_MEASUREMENT_ID&cid=CLIENT_ID&ec=noscript&ea=noscript&el=noscript"
            style={{display: 'none'}}
            alt=""
          />
        </noscript>
      </body>
    </Html>
  )
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    }
  } finally {
    sheet.seal()
  }
};

export default MyDocument;

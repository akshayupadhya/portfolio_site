import Document, { Head, Main, NextScript } from "next/document";
import Manifest from "next-manifest/manifest";
import { OneScroll } from "../components/OneScroll";
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Akshay Upadhya</title>
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <Manifest
            href="/static/manifest/manifest.json"
            // color for `theme-color`
            themeColor="#F0F0F0"
            // scale for `viewport` meta tag
            initialScale="1"
            display="fullScreen"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

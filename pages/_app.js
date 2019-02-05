import React from "react";
import App, { Container } from "next/app";
import { OneScroll } from "../components/OneScroll";
import { RouteHandler } from "../components/routeHandler";

import "../scss/style.scss";
import "../scss/pages/index.scss";
export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    console.info(this.props, `props`);
    return (
      <Container>
        <OneScroll>
          <RouteHandler>
            <Component {...pageProps} />
          </RouteHandler>
        </OneScroll>
      </Container>
    );
  }
}

import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import 'src/styles/styles.scss';

import configureStore from 'src/store/configureStore';
import initialState from 'src/store/initialState';
import initGa from 'src/utils/analytics';

const store = configureStore(initialState);

class MyApp extends App {
    constructor(props: any) {
        super(props)
        initGa();
    }

    render() {
        const { Component, pageProps } = this.props
        return (
          <>
            <Head>
              <link rel="preconnect" href="https://m.stripe.com" />
              <script async src="https://js.stripe.com/v3/" />
              <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
              />
              <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />

              <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />
              <title>Let Us Do</title>
            </Head>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </>

        )
    }
}

export default MyApp;
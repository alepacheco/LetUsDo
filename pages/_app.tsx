import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'src/store/configureStore';
import initialState from 'src/store/initialState';
import initGa from 'src/utils/analytics';
const store = configureStore(initialState);

class MyApp extends App {
    constructor(props) {
        super(props)
        initGa();
    }
    render() {
        const { Component, pageProps } = this.props
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default MyApp;
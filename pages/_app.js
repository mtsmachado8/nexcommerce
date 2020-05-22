import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../components/GlobalStyles'

const theme = {
  colors: {
    primary: '#b55050',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
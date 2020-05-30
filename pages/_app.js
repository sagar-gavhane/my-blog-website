import React from 'react'
import { ThemeProvider } from 'styled-components'

import 'styles/global.css'

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  const ReactDOM = require('react-dom')
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={{}}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

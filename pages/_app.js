import React from 'react'
import 'styles/global.css'

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  const ReactDOM = require('react-dom')
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp

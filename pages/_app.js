import '../styles/global.css'
import React from 'react'

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} >
    {pageProps}
    </Component>
  )
}

export default App

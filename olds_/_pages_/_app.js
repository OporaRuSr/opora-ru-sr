import '../styles/global.css'
import React from 'react'
import App, {Container} from 'next/app'

class MyApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <div><h1>LOL</h1></div>
        <Component {...pageProps} />
      </Container>
    )
  }   
}

export default MyApp

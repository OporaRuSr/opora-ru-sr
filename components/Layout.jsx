import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout(props) {
  const lang = props.lang || 'ru'
  const titleText = props.title || ''
  const description = props.description || ''
  return (
    <main>
      <Head>
        <title>{titleText}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content={description}/>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
      </Head>
      <Header lang={lang}/>
      {props.children}
      <Footer/>
    </main>
  )
}

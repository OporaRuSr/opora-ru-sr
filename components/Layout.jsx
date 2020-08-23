import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout(props) {
  const lang = props.lang || 'ru'
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description}/>
      </Head>
      <Header lang={lang}/>
      {props.children}
      <Footer/>
    </main>
  )
}

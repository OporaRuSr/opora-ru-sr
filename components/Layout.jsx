import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description}/>
      </Head>
      <Header/>
      {props.children}
      <Footer/>
    </main>
  )
}

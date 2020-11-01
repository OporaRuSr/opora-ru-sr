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
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content={description}/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap" rel="stylesheet"></link>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
      </Head>
      <Header lang={lang}/>
      <div className="w-full flex flex-wrap justify-center">
        <div className="mt-5 w-full lg:w-1200">
          {props.children}
        </div>
      </div>
      <Footer/>
    </main>
  )
}

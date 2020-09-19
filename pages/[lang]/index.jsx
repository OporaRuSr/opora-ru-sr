import React from 'react'
import Page from '../../components/Page'
import { getPage } from '../../api'

export default function Index({lang, payload}) {
  return (
    <Page lang={lang} payload={payload}/>
  )
}

export async function getStaticPaths() {
  const paths = [
    '/ru',
    '/sr'
  ]
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { lang } = params
  const payload = await getPage({lang, slug:'/index'})
  return {
    props: {
      lang, payload
    }
  }
}

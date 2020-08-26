import Page from '../../components/Page'
import React from 'react'
import { getPage, getPageLinks } from '../../api'

export default function RoutePage({lang, payload}) {
  console.log('[page].jsx: RoutePage ', lang, payload)
  return (
    <Page lang={lang} payload={payload}/>
  )
}

export async function getStaticPaths() {
  console.log('[page].jsx: getStaticPaths')
  const pageList = await getPageLinks()
  console.log('[page].jsx: ', pageList)
  return {
    paths: pageList,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log('[page].jsx: getStaticProps', params)
  const { lang, page } = params
  const payload = await getPage({lang, slug: page})
  return {
    props: {
      lang, payload
    },
  }
}

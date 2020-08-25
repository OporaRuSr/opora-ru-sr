import Page from '../../components/Page'
import React from 'react'
import {getPageLinks} from '../../api'

export default function RoutePage({lang, page}) {
  console.log('[page].jsx: ', lang, page)
  return (
    <Page lang={lang} slug={page}/>
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
  return {
    props: {
      lang, page
    },
  }
}

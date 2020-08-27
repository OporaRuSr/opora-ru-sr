import Page from '../../components/Page'
import Blog from '../../components/Blog'

import React from 'react'
import { getPage, getPageType, getPageLinks } from '../../api'

export default function RoutePage(props) {
  console.log('[page].jsx: RoutePage ', props)
  switch (props.pageType) {
    case 'page': return (
      <Page {...props}/>
    )
    case 'blog': return (
      <Blog {...props}/>
    )
  }
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
  const pageType = getPageType(params.page)
  return {
    props: {
      lang, payload, pageType
    },
  }
}

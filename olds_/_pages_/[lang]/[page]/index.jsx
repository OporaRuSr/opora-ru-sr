import Page from '../../../components/Page'
import Blog from '../../../components/Blog'
import BlogPage from '../../../components/BlogPage'
import Catalog from '../../../components/Catalog'

import React from 'react'
import { getPayload, getPageType, getPageLinks } from '../../../api'

import {PAGE_TYPE} from '../../../api/constants'

/**
 * @param lang
 * @param payload
 * @param pageType
 * @returns {JSX}
 * @constructor
 */
export default function RoutePage({lang, payload, pageType}) {
  const props = {pageType, lang, payload}
  // console.log('[page].jsx: RoutePage ', props)
  switch (props.pageType) {
    case PAGE_TYPE.PAGE: return (
      <Page {...props}/>
    )
    case PAGE_TYPE.BLOG: return (
      <Blog {...props}/>
    )
    case PAGE_TYPE.BLOG_PAGE: return (
      <BlogPage {...props}/>
    )
    case PAGE_TYPE.CATALOG: return (
      <Catalog {...props}/>
    )
  }
}

export async function getStaticPaths() {
  // console.log('[page].jsx: getStaticPaths')
  const pageList = await getPageLinks()
  // console.log('[page].jsx pageList: ', pageList)
  // const blogList = await getBlogPageLinks()
  // console.log('[page].jsx: ', pageList)
  // const paths = pageList.concat(blogList)
  // console.log(paths)
  return {
    paths: pageList,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // console.log('[page].jsx: getStaticProps', params)
  const { lang, page } = params
  const pageType = getPageType(params.page)
  const payload = await getPayload({
    type: pageType,
    lang,
    slug: page
  })
  return {
    props: {
      lang, payload, pageType
    }
  }
}

import React from 'react'
import BlogPage from '../../../../components/BlogPage'

import { getAllCatalogPageLinks, getAllBlogPageLinks, getBlogPage } from '../../../../api'

export default function page(props) {
  // console.log('[blog].jsx props ', props)
  return (
      <BlogPage {...props}/>
    )
}

export async function getStaticPaths() {
  // console.log('[blog]/index.jsx getStaticPaths')
  const blogList = await getAllBlogPageLinks()
  // const catalogList = await getAllCatalogPageLinks()
  return {
    paths: blogList,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { lang, page, blog } = params
  const slug = `${page}/${blog}`
  console.log(page, blog)
  const payload = await getBlogPage({lang, slug})
  return {
    props: {
      lang, payload
    }
  }
}

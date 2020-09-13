import React from 'react'
import BlogPage from '../../../components/BlogPage'

import { getAllBlogPageLinks, getBlogPage } from '../../../api'

export default function page(props) {
  // console.log('[blog].jsx props ', props)
  return (
      <BlogPage {...props}/>
    )
}

export async function getStaticPaths() {
  const blogList = await getAllBlogPageLinks()
  return {
    paths: blogList,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log('[blog].jsx: getStaticProps', params)
  const { lang, page, blog } = params
  const slug = `${page}/${blog}`
  const payload = await getBlogPage({lang, slug})
  return {
    props: {
      lang, payload
    }
  }
}

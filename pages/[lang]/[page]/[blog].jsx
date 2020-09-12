import React from 'react'
import BlogPage from '../../../components/BlogPage'

import { getAllBlogPageLinks } from '../../../api'

export default function page(props) {
  console.log('[blog].jsx props ', props)
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
  const lang = 'ru'
  const payload = 'lol kek'
  return {
    props: {
      lang, payload
    }
  }
}

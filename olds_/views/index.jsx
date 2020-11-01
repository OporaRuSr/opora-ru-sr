import assert from 'assert'

import {PAGE_TYPE} from '../api/constants'

import Page from './pages/Page'
import Blog from './pages/Blog'
import BlogPage from './pages/BlogPage'
import DefaultPage from './pages/DefaultPage'
import Layout from './components/Layout'

const MainSection = (props) => {
  console.log(props)
  const {lang, payload, type} = props
  assert(lang)
  assert(payload)
  assert(type)

  switch (type) {
    case PAGE_TYPE.PAGE: return Page(props)
    case PAGE_TYPE.BLOG: return Blog(props)
    // case PAGE_TYPE.BLOG_PAGE: return BlogPage(props)
    default:
      return DefaultPage({lang, payload, type})
  }
}

const getPage = (props) => {
  const {lang, payload} = props
  payload.meta = Object.assign( {}, {
    title: 'UNDEFINED'
    }, payload.meta)
  return (
    <Layout lang={lang} title = {payload.meta.title}>
      <MainSection {...props}/>
    </Layout>
  )
}

module.exports = {
  getPage
}

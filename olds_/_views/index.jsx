import assert from 'assert'
import {DefaultPage} from './components/DefaultPage'

import Layout from './components/Layout'

import {PAGE_TYPE} from '../api/constants'

/**
 * @param lang
 * @param payload
 * @param pageType
 * @returns {JSX}
 * @constructor
 */
const MainSection = ({lang, payload, type}) => {
    assert(lang)
    assert(payload)
    assert(type)
    const props = {lang, payload}
    // console.log('[page].jsx: RoutePage ', props)
    switch (type) {
      // case PAGE_TYPE.PAGE: return Page(props)
      default:
        return DefaultPage({lang, payload, type})
    }
    //   case PAGE_TYPE.PAGE: return (
    //     <Page {...props}/>
    //   )
    //   case PAGE_TYPE.BLOG: return (
    //     <Blog {...props}/>
    //   )
    //   case PAGE_TYPE.BLOG_PAGE: return (
    //     <BlogPage {...props}/>
    //   )
    //   case PAGE_TYPE.CATALOG: return (
    //     <Catalog {...props}/>
    //   )
    // }
  }

const MainPage = ({lang, payload, type}) => {

  console.log('MainPage', lang, payload, type)
  const props = {lang, payload, type}
  return (
    <Layout lang={lang} title = {payload.title}>
      <MainSection {...props}/>
    </Layout>
  )
}

export {
  MainPage
}

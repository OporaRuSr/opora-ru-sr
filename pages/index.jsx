import React from 'react'
// import Layout from '../components/Layout'
import Page from '../components/Page'
// import {getPage} from '../api'

// function Post(props) {
//   return <Page title={props.title} content={props.content}/>
// }

export default function Index() {
  return (
    <Page lang={'ru'} slug={'index'} />
  )
  // const page = getPage({lang:'ru', slug:'about'})
  // return (
  //   <Layout lang={props.lang} title={'My Home nlog'}>
  //     <Post title={page.title} content={page.content}/>
  //   </Layout>
  // )
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { lang: 'sr', slug: 'about' } },
//       { params: { lang: 'ru', slug: 'about' } }
//       ],
//     fallback: true
//   }
// }
//
// export async function getStaticProps(context) {
//   console.log(context)
//   // const {lang, slug} = params
//   return {
//     props: {}
//   }
// }

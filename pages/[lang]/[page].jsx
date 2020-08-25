import Page from '../../components/Page'
import React from 'react'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter();
  console.log('[page].jsx: ', router)
  const { lang, page } = router.query;
  return (
    <Page lang={lang} slug={page}/>
  )
}

export function getStaticPaths() {
  return {
    paths: [
      "/sr/about",
      "/sr/cases",
      "/sr/news",
      "/sr/catalog",
      "/ru/about",
      "/ru/cases",
      "/ru/news",
      "/ru/catalog"
    ],
    fallback: false };
}

export async function getStaticProps(context) {
  console.log('[page].jsx getStaticProps:', context)
  const {lang, page} = context.params
  return {
    props: {lang, page}
  }
}

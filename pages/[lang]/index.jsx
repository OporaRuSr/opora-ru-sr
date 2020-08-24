import Page from '../../components/Page'
import React from 'react'

import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter();
  const { lang } = router.query;
  return (
    lang==='sr'?
      <Page lang={'ru'} uri={lang}/>:<Page lang={'sr'} uri={'index'}/>
  )
}

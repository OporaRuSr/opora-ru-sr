import Page from '../../components/Page'
import React from 'react'

import { useRouter } from 'next/router'

const Lang = () => {
  const router = useRouter();
  const { lang } = router.query;
  return (
    lang === 'sr'?
      <Page lang={'sr'} slug={'index'}/>:
      <Page lang={'ru'} slug={lang}/>
  )
}

export default Lang

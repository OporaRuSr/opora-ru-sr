import React from 'react'
import { useRouter } from 'next/router'
import Index from '../index'

const Page = () => {
  const router = useRouter();
  const { lang, page } = router.query;

  return (
    <div>
      <div>My dynamic page slug: {lang} {page}</div>
      <Index lang={lang} page={page}/>
    </div>
  )
}

export default Page

import React from 'react'
import { useRouter } from 'next/router'
import Index from '../index'

const Page = () => {
  const router = useRouter();
  const { lang } = router.query;

  return (
    <div>Lol kek
      <div>My dynamic page slug: {lang}</div>
      <Index lang={'ru'} page={lang}/>
    </div>
  )
}

export default Page

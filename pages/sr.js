import React from 'react'
import { useRouter } from 'next/router'

import Index from './index'

const Sr = () => {
  const router = useRouter();
  const { lang } = router.query;

  return (
    <div>
      <div>My dynamic page slug: {lang}</div>
      <Index lang={'sr'}/>
    </div>
  )
}

export default Sr

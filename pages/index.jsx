import React, {useEffect} from 'react'
import Page from '../components/Page'
import { getPage } from '../api'

export default function Index({payload}) {
  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },[])
  return (
    <Page lang={'ru'} payload={payload}/>
  )
}

export async function getStaticProps({ params }) {
  const lang = 'ru'
  const payload = await getPage({lang, slug:'index'})
  return {
    props: {
      lang, payload
    }
  }
}

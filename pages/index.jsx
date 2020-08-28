import React, {useEffect} from 'react'
import Page from '../components/Page'

export default function Index() {

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
    <Page lang={'ru'} payload={'index'}/>
  )
}

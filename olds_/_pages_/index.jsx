import React, {useEffect} from 'react'
// import Page from '../components/Page'
// import { getPage } from '../api'
import {getPayload} from '../api/loader-v2'
import {MainPage} from '../views'

// import {PAGE_TYPE} from '../api/constants'

export default function Index(props) {
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
    <MainPage {...props}/>
  )
}

export async function getStaticProps() {
  return getPayload()
}


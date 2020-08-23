import React from 'react'
import Layout from '../components/Layout'
import MockNews from '../mocks/MockNews'

export default function Index({lang}) {
  return (
    <Layout lang={lang} title={'My Home nlog'}>
      <MockNews />
    </Layout>
  )
}

import React from 'react'
import Layout from './Layout'

export default function CatalogTags(props) {
    const {lang, payload} = props
    return (
        <Layout lang={lang} title={payload.title}>
            <h1>TagList</h1>
        </Layout>
    )
}

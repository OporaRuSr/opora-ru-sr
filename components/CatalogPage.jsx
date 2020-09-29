import React from 'react'
import Layout from './Layout'
import ReactMarkdown from 'react-markdown'

export default function CatalogPage(props) {
    const {lang, payload} = props
    return (
        <Layout lang={lang} title={payload.meta.title}>
            <h1>{payload.meta.title}</h1>
            <img src={payload.meta.newsimage} />
            {payload.meta.description}
            <ReactMarkdown source={payload.content} />
        </Layout>
    )
}

import ReactMarkdown from 'react-markdown'
import React from 'react'

const Page = ({payload}) => {
  return (
    <>
      <div className="oporaPageHead w-full px-3">
        <h1>{payload.meta.title}</h1>
      </div>
      <div className="oporaWhiteBlock lg:mx-5">
        <ReactMarkdown source={payload.content} />
      </div>
    </>
  )
}

export default Page

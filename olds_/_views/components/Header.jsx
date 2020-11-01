import React from 'react'
import Link from 'next/link'

import {PAGE_HEADERS} from '../../api/constants'

const HeaderLink = ({name, url}) => {
  return (
    <Link href={url}>
      <a className="w-full lg:w-1/4 xl:w-1/4 py-0 my-3">
        <div className="mr-5 hover:bg-blue-800 text-center hover:text-white">
          {name}
        </div>
      </a>
    </Link>
  )
}

const Links = ({lang}) => {
  return Object.keys(PAGE_HEADERS).map(index=>{
    return (
      <HeaderLink key={index} name={PAGE_HEADERS[index][lang]} url={'/'+lang+'/'+index} />
    )
  })
}

export default function Header({lang}) {
  const headerLink = "/" + lang
  return (
    <header className="oporaHeader">
      <div className="flex flex-wrap w-full justify-center ">
        <div className="flex flex-col lg:ml-5 lg:flex-row xl:flex-row w-1200 items-center">
          <div className="w-full mb-2 lg:w-1/2 xl:w-1/2">
          <Link href={headerLink}><a>
        <div className="flex flex-wrap w-full justify-center lg:justify-start items-end text-center">
          <div ><img className="h-80 mt-3 mr-5" src = "/opora.png"  alt={"Опора России"}/></div>
          <div className="align-baseline w-full lg:w-auto mt-2">
             <h1 className="font-medium text-4xl lg:text-5xl leading-none">ОПОРА РОССИИ</h1>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h6 className="text-xs mt-1">общероссийская общественная организация малого и&nbsp;среднего&nbsp;предпринимательства</h6>
          <h2 className="font-medium text-3xl tracking-wide">ПРЕДСТАВИТЕЛЬСТВО В&nbsp;СЕРБИИ</h2>
        </div>
        </a></Link>
        </div>
          <div className="w-full lg:w-1/2 text-right">
         <div className="text-base text-center lg:text-right">
          <Link href="/ru"><a className="mr-5 hover:text-gray-900 text-5xl">RU</a></Link>
          <Link href="/sr"><a className="mr-5 hover:text-gray-900 text-5xl">SR</a></Link>
         </div>
        </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center bg-white shadow-md">
        <div className="w-full lg:w-1200 text-blue-800 text-3xl py-0">
          <nav className="flex flex-col lg:flex-row xl:flex-row w-full py-0">
            <Links lang={lang} />
          </nav>
        </div>
      </div>
    </header>
  )
}

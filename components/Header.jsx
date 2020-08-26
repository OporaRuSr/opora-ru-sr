import React from 'react'
import Link from 'next/link'

const menu = {
    'news': {
      ru: 'Новости',
      sr: 'Вести'
    },
    'cases': {
      ru: 'Кейсы',
      sr: 'Случајеви'
    },
    'about': {
      ru: 'О нас',
      sr: 'О нама'
    },
    'catalog': {
      ru: 'Каталог',
      sr: 'Каталог'
    },
}

const HeaderLink = ({name, url}) => {
  return (
    <Link href={url}><a className="mr-5 hover:text-gray-900">{name}</a></Link>
  )
}

const Links = ({lang}) => {
  return Object.keys(menu).map(index=>{
    return (
        <HeaderLink key={index} name={menu[index][lang]} url={'/'+lang+'/'+index} />
    )
  })
}

export default function Header({lang}) {
  return (
    <header className="oporaHeader flex items-center justify-between">
      <div>
        <img className="h-80" src = "/opora.png"  alt={"Опора России"}/>
      </div>
      <div className="float-right">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Links lang={lang} />
          <Link href="/ru"><a className="mr-5 hover:text-gray-900">RU</a></Link>
          <a className="mr-5 hover:text-gray-900">/</a>
          <Link href="/sr"><a className="mr-5 hover:text-gray-900">SR</a></Link>
        </nav>
      </div>
    </header>
  )
}

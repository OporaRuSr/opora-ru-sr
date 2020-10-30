import {PAGE_TYPE} from '../../../../api/constants'
import { getAllCatalogPageLinks, getAllCatalogTagLinks, getCatalogPage, getTagPage } from '../../../../api'

import CatalogPage from '../../../../components/CatalogPage'
import CatalogTags from '../../../../components/CatalogTags'

export default function page({pageType, lang, payload}) {
    const props = {lang, payload}
    // console.log('[catalog].jsx props ', props)
    switch (pageType) {
        case 'page': return (
          <CatalogPage {...props}/>
        )
        case 'tags': return (
          <CatalogTags {...props}/>
        )
    }
}

export async function getStaticPaths() {
    console.log('[catalog].jsx getStaticPaths')
    const catalogList = await getAllCatalogPageLinks()
    const tagList = await getAllCatalogTagLinks()
    // console.log(tagList)
    // console.log(catalogList)
    const paths = catalogList.concat(tagList)
    console.log(paths)
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    console.log('[catalog].jsx params:', params)
    const { lang, page, blog:pageType, catalog:catalogPage } = params
    const slug = `${page}/${catalogPage}`

    // console.log(lang, page, pageType, catalogPage)
    if (pageType === 'tags') {
        console.log('TAGS!!!!')
        const payload = await getTagPage({lang, section:page, tag:catalogPage})
        return {
            props: {
                pageType,
                lang,
                payload
            }
        }
    }
    
    const payload = await getCatalogPage({lang, slug})
    // console.log(payload)
    return {
        props: {
            pageType,
            lang,
            payload
        }
    }
}

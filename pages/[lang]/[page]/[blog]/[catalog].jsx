import {PAGE_TYPE} from '../../../../api/constants'
import { getAllCatalogPageLinks, getCatalogPage } from '../../../../api'

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
    // console.log('[catalog].jsx getStaticPaths')
    const catalogList = await getAllCatalogPageLinks()
    // console.log(catalogList)
    return {
      paths: catalogList,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    console.log('[catalog].jsx params:', params)
    const { lang, page, blog:pageType, catalog:catalogPage } = params
    console.log(lang, page, pageType, catalogPage)
    if (pageType === 'tags') {
        return {
            props: {

            }
        }
    }
    
    const slug = `${page}/${catalogPage}`
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

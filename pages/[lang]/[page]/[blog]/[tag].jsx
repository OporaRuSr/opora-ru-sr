import { getAllCatalogPageLinks } from '../../../../api'

export default function page(props) {
    console.log('[blog].jsx props ', props)
    return (
        <h1>Hello</h1>
    )
}

export async function getStaticPaths() {
    console.log('[tag]/index.jsx getStaticPaths')
    const catalogList = await getAllCatalogPageLinks()
    console.log(catalogList)
    return {
      paths: catalogList,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    console.log(params)
    return {
        props: {}
      }
}

import Layout from './Layout'
import Link from 'next/link'

const Blog = ({lang, payload}) => {
  // console.log('Blog payload: ', payload)
  return (
      <Layout lang={lang} title={payload.title}>
        <div>
          <h2>{payload.title}</h2>
        </div>
        <div>
          <ul>
            {payload.links.map(function(post, id) {
              return (
                <li key={id}>
                  <Link href={post.url}>
                    <a>{post.title}
                      <div><img src={post.newsimage} /></div>
                    </a>
                  </Link>

                  <div>{post.description}</div>
                </li>
              )
            })}
          </ul>
        </div>
       </Layout>
  )
}

export default Blog

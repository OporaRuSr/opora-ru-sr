import Layout from './Layout'
import Link from 'next/link'

const Blog = ({lang, payload}) => {
  // console.log('Blog payload: ', payload)
  return (
      <Layout lang={lang} title={payload.title}>
        <div>
          <ul>
            {payload.links.map(function(post, id) {
              return (
                <li key={id}>
                  <div className="shadow-lg p-8">
                    <div className="w-1/4 ">
                    <Link href={post.url}>
                      <a>
                        <div><img src={post.newsimage} /></div>
                      </a>
                    </Link>
                    </div>
                    <Link href={post.url}>
                      <a>{post.title}
                      </a>
                    </Link>
                   <div>{post.description}</div>

                  </div>  
                </li>
              )
            })}
          </ul>
        </div>
       </Layout>
  )
}

export default Blog

import Link from 'next/link'


export default function PageList ({list}) {
  return (
        <ul>
        {
          list.map(function(post, id) {
            return (
              <li key={id}>
                <Link href={post.uri}>
                  <a>
                    <div className="oporaWhiteBlock flex flex-col lg:flex-row">
                      <div className="oporaImgNews lg:mb-0 lg:w-1/3 lg:mr-6">
                        <img className="w-full" src={post.newsimage} />
                      </div>
                      <div className="w-full lg:ml-6 lg:w-2/3">
                        <div className="oporaLinkNews ">{post.title}</div>
                        <div>{post.description}</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })
        }
        </ul>
  )
}

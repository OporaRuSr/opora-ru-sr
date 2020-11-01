import Link from 'next/link'

export default function TagLinks ({tags}) {
    return (
        <div>
        {
          tags.map(function(tag, id) {
            return (
              <Link key={id} href={tag.link}><a>#{tag.name+' '}</a></Link>
            )
          })
        }
        </div>
    )
}

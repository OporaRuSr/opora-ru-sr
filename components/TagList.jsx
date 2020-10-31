import Link from 'next/link'

const TagItem = (tag, id) => {
  return (
    <div key={id} className="ml-5">
      <li>
          <Link href={tag.link}><a>#{tag.name+' '}</a></Link>
      </li>
    </div>
  )
}

export default function TagList ({tags}) {
  return (
    <ul className="w-full lg:w-1/4">
      <div className="w-full flex flex-wrap lg:flex-col text-lg mb-5">
      {
        tags.map((tag, id) => TagItem(tag,id))
      }
      </div>
    </ul>
  )
}

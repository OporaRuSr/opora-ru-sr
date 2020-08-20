import Link from 'next/link'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title={'About'}>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

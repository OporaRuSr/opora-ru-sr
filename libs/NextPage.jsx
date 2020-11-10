
const NextPage =  (props) => {
  console.log('page:', props)
  if (!props.payload) {
    return (
      <h1>FUCK NEXTJS!!!</h1>
    )
  }
  return (
    <h1>BABUSHKA</h1>
  )
}

// module.exports = NextPage

export default NextPage

// export async function getStaticProps(props) {
//   console.log('[getStaticProps]', props)
//   return {
//     props: {
//       payload: {}
//     }
//   }
// }

const ShowPayload = (props) => {
  return (
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre>
  )
}

export default ShowPayload

const DefaultPage = ({lang, payload, type}) => {
  return (
    <div>
      <h1>Default page {lang} {type}</h1>
      {JSON.stringify(payload)}
    </div>
  )
}

export default DefaultPage

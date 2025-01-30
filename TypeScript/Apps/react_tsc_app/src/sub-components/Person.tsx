
type personProps = {
    name: {
        first: string,
        last: string
    }
}
function Person(props: personProps) {
  return (
      <div>{ props.name.first} { props.name.last}</div>
  )
}

export default Person
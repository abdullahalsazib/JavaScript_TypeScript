import { Name } from "./Person.type"

type nameListProps = {
    names: Name[]
}
function PersonList(props: nameListProps) {
  return (
      <div>
          {
        props.names.map((item, index) => 
            {
            return(
            <h2 key={index}> {item.first} {item.last} </h2>
            )
            }
            )
          }
    </div>
  )
}

export default PersonList
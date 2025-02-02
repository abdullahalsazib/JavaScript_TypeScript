
type StatusProps = {
    status: `loading` | `success` | `error`
}
function Status(props: StatusProps) {
    let message: string = ''
    if (props.status === "loading") {
        message = "Loding..."
    } else if (props.status === "success") {
        message = "Data fetched successfully..."
    } else if(props.status === "error") {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        message = "Error fetching data. 🔴"
    }
  return (
      <div>
          {/* <h2>Loding...</h2>
          <h2>Data fetched successfully...</h2>
          <h2>Error fetching data. 🔴</h2> */}
          <h2> Status - {message} </h2>
    </div>
  )
}

export default Status


type OscerProps = {
    children: React.ReactNode
}
function Oscer(props: OscerProps) {
  return (
      <div>
          {props.children}
          <h1>Lorem, ipsum.</h1>
      </div>
      
  )
}

export default Oscer
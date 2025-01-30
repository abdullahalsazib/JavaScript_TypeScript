type HeadProps = {
  children: string
}
function Heading(props: HeadProps) {
  return (
      <h2>
          {props.children}
    </h2>
  )
}

export default Heading
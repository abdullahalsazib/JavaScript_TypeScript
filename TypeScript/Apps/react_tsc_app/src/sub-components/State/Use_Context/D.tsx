import { useContext } from 'react'
import { FirstName } from './A'
export default function D() {
  const firstName = useContext(FirstName)
  return (
    <div>{ firstName }</div>
  )
}

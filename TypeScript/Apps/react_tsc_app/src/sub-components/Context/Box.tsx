import { useContext } from "react"
import { ThemeContext} from './ThemeContext'

function Box() {
    const Theme = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: Theme.secondary.main, color: Theme.primary.text}}>Theme Context</div>
  )
}

export default Box
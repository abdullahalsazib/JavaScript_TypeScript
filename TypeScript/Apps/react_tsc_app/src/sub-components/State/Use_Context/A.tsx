import { createContext } from "react"
import D from "./D"

const FirstName = createContext<string | null>(null)
export default function A() {
  return (
    <div>
      <FirstName.Provider value="jack">
      <D />
      </FirstName.Provider>
    </div>
  )
}

export {FirstName}
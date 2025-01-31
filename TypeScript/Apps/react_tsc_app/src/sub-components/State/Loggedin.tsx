import { useState } from "react"

function Loggedin() {
  const [isLogIn, setIsLogIn] = useState<boolean>(false)

  const handleLogIn = () => {
      setIsLogIn(!isLogIn)
    }
    const handleLogOut = () => {
    setIsLogIn(!isLogIn)
   }

  return (
      <div className="flex items-center justify-center flex-col py-10">
      
      <SimpleBtn handleEvent={handleLogIn} title={ "Log In"} />
      <SimpleBtn handleEvent={handleLogOut} title={ "Log Out"} />
      <div>User is  { isLogIn ? "Log In" : "Log Out" }</div>
    </div>
  )
}

export default Loggedin

type simpleBtnProps = {
  handleEvent: () => void;
  title: string
  
}
const SimpleBtn = ({ handleEvent, title }: simpleBtnProps) => {
  return (
    <>
      <button onClick={handleEvent} className=" cursor-pointer border-2 py-1 px-3 font-semibold rounded-md">{ title }</button>
    </>
  )
}
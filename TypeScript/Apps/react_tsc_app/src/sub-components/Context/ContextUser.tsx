import { useContext } from "react";
import { UserContext } from "./UserContext";


export const ContextUser = () => {
    const userContext = useContext(UserContext)

    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'jack',
                email: "jack124@mail.com"
            })
        }
    }
    const handleLogout = () => {
            userContext.setUser(null)
    }
    return (
        <>
            <div className="flex items-center justify-center flex-col py-10 gap-2">
                <SimpleBtn handleEvent={handleLogin} title={ "Log In"} />
                <SimpleBtn handleEvent={handleLogout} title={ "Log Out"} />
               <div>User Name: {userContext.user?.name} </div>
               <div>User Email Address: {userContext.user?.email} </div>
            </div>
        </>
    )
} 

type simpleBtnProps = {
  handleEvent?: () => void;
  title: string
  
}
const SimpleBtn = ({ handleEvent, title }: simpleBtnProps) => {
  return (
    <>
      <button onClick={handleEvent} className=" cursor-pointer border-2 py-1 px-3 font-semibold rounded-md">{ title }</button>
    </>
  )
}
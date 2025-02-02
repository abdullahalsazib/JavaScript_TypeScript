import { useState } from "react";


type AuthorUser = {
    name: string;
    email: string
}
export const User = () => {
    const [user, setUser] = useState< AuthorUser>({} as AuthorUser)
    const handlelogin = () => {
        setUser({
            name: "jack",
            email: "jack@12gmail.com"
        })
    }
    // const handlelogout = () => {
    //     setUser({} as AuthorUser)
    // }
    return (
        <>
       
             <div className="flex items-center justify-center flex-col py-10 gap-2">
             
             <SimpleBtn handleEvent={handlelogin} title={ "Log In"} />
             {/* <SimpleBtn } title={ "Log Out"} /> */}
             <div>User Name is: {user.name} </div>
             <div>User Email Address: { user.email } </div>
           </div>
         
       
       
        </>
    )
} 

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
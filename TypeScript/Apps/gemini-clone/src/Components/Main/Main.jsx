/* eslint-disable react/prop-types */
import { MdOutlineCloudUpload } from "react-icons/md"
import Navbar from "./Navbar"
import { FaMicrophone } from "react-icons/fa6"
import Messages from "./Messages"

function Main() {
  return (
       <>
       <div className="w-full bg-[#1B1C1D] overflow-hidden h-screen">
                 <Navbar cssClass={'fixed sticky '}>
                      
            </Navbar>
            <section className=" flex items-center justify-center flex-col w-full h-[90%] ">
                 <div className=" w-full py-[100px] h-[100%] flex items-center justify-between flex-col">
                           <div className=" px-[23%] w-[100%] h-full overflow-scroll overflow-x-hidden text-white text-left  font-extrabold scroll_ber_css scroll-pl-3 snap-x">
                                {/* <h1>Hello, Jack Sparrow 🏴‍☠️</h1> */}
                                <Messages styles={ "snap-start" } />
                           </div>
                           <div className=" border-amber-50 border-[1px] rounded-full  text-white  px-4 w-[50%] flex items-center justify-between text-[20px]">
                                <Icon_btn icon={<MdOutlineCloudUpload />}/>
                                   <input className="border-none outline-none w-full mx-4 text-[17px] h-full py-5 px-5" type="text" placeholder="Ask Gemini.."  />
                                <Icon_btn icon={<FaMicrophone />}/>
                           </div>
                 </div>
                 
           </section>
          </div></>
  )
}

export default Main
const Icon_btn = (props) => {
     return (
          <>
               <button className="cursor-pointer duration-100 hover:opacity-50 text-[#999] hover:bg-[#333434] p-3 rounded-full">
                    { props.icon }
               </button>
          </>
     )
}
import "./Sidebar.css";
import { assets }  from '../../assets/assets.js'
import { IoMenu } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdHistory, MdMessage } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { TbMessage2Code } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
function Sidebar() {
     const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
     <div className={` bg-[#282A2C] h-screen py-2 px-3 flex flex-col justify-between ${sidebarOpen ? "w-20 text-center duration-300" : "w-80 items-start duration-500"}`}>
            <div className=" flex items-start justify-start flex-col gap-5">
                 <div className={`flex ${sidebarOpen ? "items-center" : "items-start"} justify-center gap-20 w-full flex-col`}>
                      <button onClick={()=> setSidebarOpen(!sidebarOpen)} className="text-[40px] text-white opacity-80 cursor-pointer hover:opacity-40 duration-300 active:opacity-100"><IoMenu /></button>
                 <button className={`bg-[#141516b5] text-[#85898d] flex items-center gap-4 ${sidebarOpen ? "py-5 px-5 text-[18px]": "py-3 px-7 text-[13px]"} rounded-full cursor-pointer`}>
                      <FaPlus/>
                           <p className={ `${sidebarOpen ? "hidden duration-500" : "block  duration-500"}` }>New Chat</p>
                 </button>
                 </div>
                 {/* recent */}
                 <div className={`w-full ${sidebarOpen ? "hidden duration-700" : " opacity-80 block duration-500"} `}>
                      <h3 className="text-sm font-semibold text-white opacity-65 py-1">Recent</h3>
                      <ul className="space-y-1">
                           {/* resent history's */}
                           <RecentHistorys/>
                           <RecentHistorys/>
                           <RecentHistorys/>
                           <RecentHistorys/>
                           <RecentHistorys/>
                      </ul>
                 </div>
            </div>
            <div className="w-full flex items-start flex-col justify-between gap-7">
                 <div className="w-full">
                      <div className="flex items-start justify-start flex-col">
                           <a className={`flex gap-x-3 font-semibold a_link ${sidebarOpen ? "px-5 py-4": "py-3 px-5"} `} href="#"> <TbMessage2Code/>  <p className={`text-sm ${sidebarOpen ? "hidden" : "block"}`}>Gem manager</p> </a>
                           <a className={`flex gap-x-3 font-semibold a_link ${sidebarOpen ? "px-5 py-4": "py-3 px-5"} `}  href="#"> <IoIosHelpCircleOutline /> <p className={`text-sm ${sidebarOpen ? "hidden" : "block"}`}>Help</p> </a>
                           <a className={`flex gap-x-3 font-semibold a_link ${sidebarOpen ? "px-5 py-4": "py-3 px-5"} `}  href="#"> <MdHistory /> <p className={`text-sm ${sidebarOpen ? "hidden" : "block"}`}>Activity</p> </a>
                           <a className={`flex gap-x-3 font-semibold a_link ${sidebarOpen ? "px-5 py-4": "py-3 px-5"} `}  href="#"> <IoSettingsOutline /><p className={`text-sm ${sidebarOpen ? "hidden" : "block"}`}>Setting</p> </a>
                      </div>
                 </div>
                 <div className={`flex items-center justify-between gap-3 font-semibold text-white opacity-45 ${sidebarOpen ? "items-center justify-center flex-col w-full" : "items-start justify-start"}  `}>
                      <img className="w-10 h-10 bg-black rounded-full p-1" src={assets.user_icon} alt="" />
                      <div className={`flex items-start flex-col text-white opacity-45 ${sidebarOpen ? "hidden" : "block"} `}>
                           <h3>Bangladesh</h3>
                           <p className="text-[9px]">Based on your places (work) • Update location</p>
                      </div>
                 </div>
            </div>
     </div>
  )
}

export default Sidebar

const RecentHistorys = () => {
     return (
          <>
          <li>
               <a  className="text-white w-full flex items-center gap-2 text-sm hover:bg-[#1c1d1f] duration-300 rounded-full py-2 px-5 text-nowrap group/recent relative" href="#">
                    <MdMessage className="text-[17px]" /> <p>Lorem ipsum dolor sit..</p>
                    <HiDotsVertical className="text-[19px] hidden group-hover/recent:block absolute right-2" />
                         
               </a>
          </li>
          </>
     )
}
import { useEffect, useRef, useState } from "react"
import {  GiPirateFlag } from "react-icons/gi"
import { GoBell, GoPulse, GoSignOut } from "react-icons/go"
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi"
import { IoSearch } from "react-icons/io5"
import { MdOutlineSettings } from "react-icons/md"
import NotificationBadge from "../../sub-components/NotificationBadge"
import { BiUser } from "react-icons/bi"
import { CiSettings } from "react-icons/ci"
// https://ecme-react.themenate.net/dashboards/ecommerce

function Dashboard() {
  const [sideOpen, setSideOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && 
          !dropdownRef.current.contains(event.target as Node)) {
        setUserOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <>
      <div className=" w-full h-screen flex fixed">
        <aside className={`bg-[#FFFFFF] ${sideOpen? "w-96": "w-20"} duration-200 gap-5 border-r-2 border-slate-200 h-screen flex flex-col items-center py-[10px]`}>
          <h1 className="capitalize text-2xl font-bold font-sans text-black"> {!sideOpen ? <img className="w-10" src="https://ecme-react.themenate.net/img/logo/logo-light-streamline.png"/> : <img className="w-[70%]" src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"/> } </h1>
          
        </aside>

        <div className=" w-full h-screen bg-[#F5F5F5]">
          {/* Header */}
          <div className="bg-[#fff] w-full py-[15px] px-5  border-b-2 border-slate-300 flex flex-row items-center justify-between">
           {/* left header */}
           
            <div className="flex items-center justify-center gap-x-3">
              <IconBtnStyle onClick={() => setSideOpen(!sideOpen)} icons= {!sideOpen ? <HiOutlineMenuAlt2 size={25} /> : < HiOutlineMenuAlt3 size={25}/>} />
              <IconBtnStyle icons={<IoSearch size={25} />} />
            </div>
            {/* right header */}
            <div className="flex items-center justify-center gap-x-2">
              <IconBtnStyle icons={ <GiPirateFlag size={25} />} />
              <div className="relative" >
                <IconBtnStyle  icons={<GoBell size={25} />} />
                <NotificationBadge position="top-1" count={100}/>
              </div>
              <IconBtnStyle icons={<MdOutlineSettings size={25} />} />
              
              <div className="relative duration-300" ref={dropdownRef}>
              <IconBtnStyle 
                onClick={() => setUserOpen(!userOpen)}
                icons={
                  <img 
                    className="w-12 rounded-full" 
                    src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" 
                    alt="User" 
                  />
                } 
              />
      
          <div className={`absolute right-7 top-13 w-[250px]
            rounded-lg bg-white transition-all inset-shadow-sm shadow-lg
            duration-300 ease-in-out ${
              userOpen 
                ? "translate-y-0 opacity-100"
                : "-translate-y-[300%] opacity-0"
            } p-3 flex items-center justify-center`}
          >
                  {/* Dropdown content */}
                  <div>
                    <div className="flex items-center flex-row gap-x-3 py-2">
                      <img className="w-13 rounded-full" src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" alt="User" />
                    <div>
                      <h1>
                        <h3>Angelina Gotelli</h3>
                          <p className="text-xs text-slate-600">admin-01@ecme.com</p>
                      </h1>
                    </div>
                    </div>
                    <hr className="text-slate-300"/>
                    <div className="flex items-start justify-start flex-col gap-y-1 py-2">
                      <UserSetBtn title="Projile" icons={ <BiUser/> } />
                      <UserSetBtn title="Setting" icons={<CiSettings/> } />
                      <UserSetBtn title="Activity Log" icons={ <GoPulse/> } />
                    </div>
                    <hr className="text-slate-300" />
                     <div className="flex items-start justify-start flex-col gap-y-1 py-2">
                      <UserSetBtn title="Sign Out" icons={ <GoSignOut/> } />
                      
                    </div>
                  </div>
                  </div>
                </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard

type IconBtnStyleProps = {
  icons: React.ReactNode
  onClick?: () => void
}
const IconBtnStyle = (props: IconBtnStyleProps) => {
  return (
    <>
      <button onClick={props.onClick} className="text-2xl text-slate-500 cursor-pointer hover:text-slate-700 hover:font-semibold hover:bg-slate-100 w-10 h-10 flex items-center justify-center rounded-full duration-200">
        
        {
          props.icons
        }
      </button>
    </>
  )
}

type UserSetBtnProps = {
  icons: React.ReactNode;
  title: string;
  onClickEvent?: () => void;
}
const UserSetBtn = (props: UserSetBtnProps) => {
  return (
    <>
      <button onClick={props.onClickEvent} className="flex items-center justify-start gap-x-3 text-[16px] font-semibold py-3 px-3 group/item rounded-md w-full cursor-pointer duration-200 hover:bg-slate-50">
          {props.icons}
        <span className=" group-hover/item:text-slate-600 group-hover/item:duration-200"> {props.title} </span>
      </button>
    </>
)
}
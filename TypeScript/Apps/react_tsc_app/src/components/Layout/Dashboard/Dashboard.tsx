import { useEffect, useRef, useState } from "react"
import {  GiPirateFlag } from "react-icons/gi"
import { GoBell, GoPulse, GoSignOut } from "react-icons/go"
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi"
import { IoSearch } from "react-icons/io5"
import { MdOutlineSettings } from "react-icons/md"
import NotificationBadge from "../../../sub-components/Test/NotificationBadge"
import {  BiDownArrow, BiRightArrow, BiUser } from "react-icons/bi"
import { CiSettings } from "react-icons/ci"
import { UserCircleIcon } from "@heroicons/react/16/solid"
import { BsHandbag, BsMarkerTip } from "react-icons/bs"
import { FaProjectDiagram } from "react-icons/fa"
// https://ecme-react.themenate.net/dashboards/ecommerce

function Dashboard() {
  const [sideOpen, setSideOpen] = useState(true);
  const [userOpen, setUserOpen] = useState(false)
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const [countNo, setCountNo] = useState<number>(100)

  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleCounter = () => {
    confirm("OK Notification is clear")
    setCountNo(0)
  }
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
  const nevItems = [
        {
        title: "Dashboard",
        items: [
            {text: "Ecommerese", icon: <BsHandbag/>, path: "#", dropdown: false,},
            {text: "Project", icon: <FaProjectDiagram/>, path: "#", dropdown: false,},
            {
              text: "Marketing", icon: <BsMarkerTip />,
              dropdown: true,
              dropdownItems: [
                {text: "jack", path: "#"},
                {text: "Chart", path: "#"},
                {text: "Card", path: "#"},
              ]},
              {text: "Project", icon: <FaProjectDiagram/>, path: "#", dropdown: false,},
            ],
          
          
        },
        {
        title: "Dashboard",
        items: [
            {text: "Ecommerese", icon: <BsHandbag/>, path: "#", dropdown: false,},
            {text: "Project", icon: <FaProjectDiagram/>, path: "#", dropdown: false,},
            {
              text: "Marketing", icon: <BsMarkerTip />,
              dropdown: true,
              dropdownItems: [
                {text: "jack", path: "#"},
                {text: "Chart", path: "#"},
                {text: "Card", path: "#"},
              ]},
              {text: "Project", icon: <FaProjectDiagram/>, path: "#", dropdown: false,},
            ],
          
          
        },
        
    ]
  return (
    <>
      <div className=" w-full h-screen flex fixed">
        <aside
          className={`bg-[#FFFFFF] ${sideOpen ? "w-96" : "w-20"} duration-200 gap-0 border-r-2 border-slate-200 h-screen flex flex-col items-start px-3 `}>
          <h1 className={`capitalize text-2xl font-bold font-sans text-black py-4 w-full flex  ${!sideOpen ? "items-center justify-center": "items-start justify-start" }`} > {!sideOpen ?
            <img className="w-10" src="https://ecme-react.themenate.net/img/logo/logo-light-streamline.png" /> 
            : <img className="w-[50%]" src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" />}
          </h1>
          

          {/* Dashboard  */}
          <div className="w-full h-full ">
              {
                  nevItems.map((item, index) => (
                    <div key={index}>
                      {
                        sideOpen ?
                        <h3 className="text-[19px] font-semibold text-[#737373] font-mono px-3">{item.title}</h3>
                        : null
                      }
                        <ul className="flex items-center flex-col gap-0  w-full">
                              {
                                  item.items.map((liItem, index) => (
                                    <li className="w-full font-mono" key={index}>
                                      <a onClick={()=> setDropDownOpen(!dropDownOpen)} className={`text-[19px] cursor-pointer font-semibold flex  gap-3 py-3 px-4 rounded-lg hover:bg-slate-100 duration-300 w-full ${!sideOpen ? "justify-center " : "justify-between "} text-[#2a85ff]`} href={liItem.path}>
                                        <div className="flex items-center justify-start gap-3">
                                          {liItem.icon} <span className={`text-base font-semibold text-[14px] ${!sideOpen ? 'hidden' : "block"} `}> {liItem.text} </span>
                                        </div>
                                        {
                                           liItem.dropdown ?
                                            (!dropDownOpen?<BiRightArrow />: <BiDownArrow/>)
                                            : null
                                        }
                                        
                                      </a>
                                      
                                      {
                                        sideOpen ? 
                                          liItem.dropdown && dropDownOpen ? 
                                          <ul className=" duration-300 w-auto  flex flex-col items-center gap-1 mx-4" style={{ padding: '0' }}>
                                            {
                                              liItem.dropdownItems?.map((item, index) => (
                                                <a href={item.path} className="w-full h-full bg- py-3 rounded-lg px-4 hover:bg-slate-100 duration-200 cursor-pointer" key={index} >
                                                  <a className={`list-disc text-[15px] cursor-pointer font-semibold rounded-lg hover:bg-slate-100 duration-200 text-[#2a85ff]`} > 🎱 { item.text}</a>
                                            </a>
                                              ))
                                            }
                                        </ul>
                                          : 
                                            null
                                          :null
                                      }
                                    </li>
                                   
                                  ))
                            }
                        </ul>
                    </div>
                ))  
              }
            
          </div>

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

          
          <div className="bg-slate-200 w-full h-screen flex items-center justify-center">
            <div className=" relative   ">
              <IconBtnStyle onClick={()=> handleCounter()} icons={ <UserCircleIcon/>}/>
              <NotificationBadge position="-bottom-5 bg-yellow-600" count={countNo}/>
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
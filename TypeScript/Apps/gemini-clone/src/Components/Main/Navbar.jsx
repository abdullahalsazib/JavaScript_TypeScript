/* eslint-disable react/prop-types */
import { FaCaretDown } from "react-icons/fa6"
import { PiDotsNineBold } from "react-icons/pi";
import { assets } from "../../assets/assets";
import { useState } from "react";

function Navbar({cssClass}) {
     const [gemini_v, setGemini_v] = useState(false)
  return (
     <>
            <div className={`flex items-center justify-between bg-transparent py-3 px-5 ${cssClass}`}>
                 <button onClick={()=> setGemini_v(!gemini_v)} className="flex items-start gap-3 flex-row text-white cursor-pointer duration-200 active:bg-[#2f3132] hover:bg-[#1B1C1D] p-3 rounded-lg">
                      {/* gemini _v */}
                      <div>
                           <h1 className="text-[20px] font-extrabold">Gemini</h1>
                      <p className="text-sm font-semibold text-[#798589]">2.0 Flash</p>
                      </div>
                      <FaCaretDown size={20} className="text-[#798589]" />
                      {/*  */}
                      {/* dropdown_for_gemini_upgarade */}
                 </button>
                 
                 <div className="flex items-center gap-5 text-white">
                      <button className="flex items-center py-3 px-5 bg-[#3D3F42] hover:bg-[#4a4c50] duration-200 rounded-md text-sm gap-4 cursor-pointer"> <img className="w-5" src={assets.gemini_icon} alt="" /> Try Gemini Advanced</button>
                      <button className="text-[40px]"><PiDotsNineBold /></button>
                      <button>
                           <img className="w-12 h-12 bg-black rounded-full p-1" src={assets.user_icon} alt="" />
                      </button>
                 </div>
     </div>      
     </>
  )
}

export default Navbar
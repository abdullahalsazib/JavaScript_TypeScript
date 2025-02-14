import { Link } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { BiLogOut, BiUser, BiXCircle } from "react-icons/bi";
import Logout from "../Pages/Log_Sign/Logout";
import { navLinks } from "../data/NavData";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsBagX } from "react-icons/bs";

export const Navber = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user } = useContext(AuthContext)!;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setIsCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-[#FFFFFF] shadow-xs z-50 fixed ">
      <div className="w-full py-4 px-[10%] flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-35"
            src="https://wpocean.com/html/tf/pengu/assets/images/logo.svg"
            alt="Logo"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-15">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.hrefTo}
                className="uppercase text-gray-600 font-normal hover:font-semibold hover:text-gray-950 duration-200 text-sm tracking-wider"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Dropdown Menu */}
        <div
          className="relative flex itc justify-center gap-4"
          ref={dropdownRef}
        >
          <ButtonIcon
            icon={<BiUser />}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />

          {isDropdownOpen && (
            <div className="absolute right-0 top-14 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-300 border border-slate-200">
              {user ? (
                <>
                  <h1 className="block px-4 py-2 hover:bg-gray-100">
                    Name: {user?.name}
                  </h1>
                  <p className="block px-4 py-2 hover:bg-gray-100">
                    Email: {user?.email}
                  </p>

                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    📊 Dashboard
                  </Link>
                  {/* <Link
                    to="/update"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    ✏️ Edit Profile
                  </Link> */}

                  <Logout
                    icon={<BiLogOut />}
                    title="Logout"
                    className="flex items-center justify-start gap-3 px-4 py-2 hover:bg-gray-100 "
                  />
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    🔑 Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    📝 Register
                  </Link>
                </>
              )}
            </div>
          )}
          <ButtonIcon icon={<IoSearch />} />
          <ButtonIcon icon={<IoMdHeartEmpty />} />
          <div ref={dropdownRef}>
            <ButtonIcon
              onClick={() => setIsCart(!isCart)}
              icon={<MdOutlineShoppingCart />}
            />
            {isCart && (
              <div className=" absolute w-[417px] shadow-lg rounded-lg bg-[#fff] top-0 right-0 p-5 duration-200">
                <div className="flex items-center justify-between">
                  <h1 className=" text-2xl capitalize">Shopping Cart</h1>

                  <ButtonIcon
                    icon={<BsBagX />}
                    onClick={() => setIsCart(!isCart)}
                  />
                </div>
                <hr className="text-slate-300 w-full my-5" />
                <div className=" flex flex-col gap-2">
                  <CartBugComponent />
                  <CartBugComponent />
                  <CartBugComponent />
                  <CartBugComponent />
                </div>

                {/* footer of cart */}
                <div className=" py-5 px-5">
                  <div className=" flex flex-row items-center justify-between">
                    <h1 className=" text-2xl capitalize">Subtotal</h1>
                    <p className=" text-amber-400 capitalize text-xl">
                      BDT: 210002
                    </p>
                  </div>
                </div>
                <div className=" border-t-[1px] border-gray-400 py-5 flex items-center justify-between ">
                  <CartBtn title="cart" />
                  <CartBtn title="Chackout" />
                  <CartBtn title="Comparison" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ButtonIconProps {
  icon: React.ReactNode;
  onClick?: () => void;
}
const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className="flex items-center justify-center group/btn text-2xl gap-2 p-1.5 cursor-pointer focus:outline-none w-8 h-8 rounded-full duration-200 hover:text-4xl "
      >
        <div className=" group-focus/btn:scale-50 duration-200">
          {props.icon}
        </div>
      </button>
    </>
  );
};

const CartBugComponent = () => {
  return (
    <>
      <div className=" flex items-center justify-between  p-1 rounded-md  ">
        <div>
          <img
            className=" w-30 rounded-md"
            src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="flex items-start justify-between flex-col">
          <h1 className=" text-xl">Asgaard sofa</h1>
          <p className=" flex items-center justify-center gap-3">
            1 X <span className="text-amber-400">BDT: 10020</span>
          </p>
        </div>
        <ButtonIcon icon={<BiXCircle />} />
      </div>
    </>
  );
};

interface CartBtnProps {
  title: string;
}
const CartBtn: React.FC<CartBtnProps> = ({ title }) => {
  return (
    <>
      <button className=" py-1.5 px-5 rounded-full border-[1px] border-slate-800 cursor-pointer capitalize">
        {title}
      </button>
    </>
  );
};

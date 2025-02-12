import { Link } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { BiLogOut, BiUser } from "react-icons/bi";
import Logout from "../Pages/Log_Sign/Logout";

export const Navber = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user } = useContext(AuthContext)!;

  const navLinks = [
    { hrefTo: "/", title: "Home" },
    { hrefTo: "/shop", title: "Shop" },
    { hrefTo: "/", title: "Pages" },
    { hrefTo: "/", title: "Blog" },
    { hrefTo: "/", title: "Contact Us" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
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
        <div className="relative" ref={dropdownRef}>
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
        </div>
      </div>
    </div>
  );
}

interface ButtonIconProps {
  icon: React.ReactNode;
  onClick: () => void;
}
const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className="flex items-center justify-center text-2xl gap-2 p-1.5 cursor-pointer focus:outline-none w-8 h-8 rounded-full ring-2 hover:bg-sky-100 duration-200 hover:text-4xl ring-blue-500"
      >
        {props.icon}
      </button>
    </>
  );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import Logout from "../Pages/Logout";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";

function Navber() {
  const [down, setDown] = useState(false);
  const { user } = useContext(AuthContext)!;
  // console.log(user);
  let menu;
  //  if login then show the button name logout and else show in navber the login and reaginster button
  if (user) {
    menu = (
      <div className="flex items-center justify-center gap-4">
        <div className="p-2 flex items-center justify-center flex-row gap-2 ">
          <img
            onClick={() => setDown(!down)}
            className=" w-10 h-10 rounded-full cursor-pointer ring-4 ring-blue-500"
            src={"http://localhost:8000" + user.profile_pic_url}
            alt="error"
          />
          {down ? (
            <BiRightArrow onClick={() => setDown(!down)} />
          ) : (
            <BiDownArrow onClick={() => setDown(!down)} />
          )}
        </div>
        {down ? (
          <div className="flex items-start justify-center flex-col gap-1 absolute top-[9%] right-10 py-3 px-10 bg-slate-100 shadow-2xl border-[1px] border-slate-500 rounded-md text-black">
            <h4 className=" capitalize"> Name: {user.name}</h4>
            <p className="text-sm">user email: {user.email}</p>
            <div className="flex items-start justify-start gap-2 flex-col">
              <Link
                className=" py-2 px-4 font-semibold text-sm bg-green-400 rounded-md cursor-pointer"
                to="/update"
              >
                Edit Profile
              </Link>
              <Link
                className="py-2 px-5 bg-green-300 rounded-md"
                to="/dashboard"
              >
                Dashboard
              </Link>
              <Logout />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    menu = (
      <ul className="flex items-center justify-between gap-3">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    );
  }
  return (
    <div>
      <div className="w-full py-5 px-10 bg-slate-900 text-white flex items-center justify-between">
        <Link to="/">Home</Link>
        <ul className="flex items-center justify-between gap-3">{menu}</ul>
      </div>
    </div>
  );
}

export default Navber;

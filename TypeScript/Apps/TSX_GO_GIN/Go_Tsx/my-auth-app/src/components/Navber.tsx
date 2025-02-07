/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import Logout from "../Pages/Logout";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navber() {
  const { user } = useContext(AuthContext)!;
  console.log(user);
  let menu;
  //  if login then show the button name logout and else show in navber the login and reaginster button
  if (user) {
    menu = (
      <div className="flex items-center justify-center gap-4">
        <Logout />
        <div className="p-2 flex items-center justify-center flex-row gap-2">
          <div className=" w-10 h-10 bg-green-600 rounded-full "></div>
          <div className="flex items-start justify-center flex-col gap-0">
            <h4 className=" capitalize">User name: {user.name}</h4>
            <p className="text-sm">user email: {user.Email}</p>
          </div>
        </div>
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

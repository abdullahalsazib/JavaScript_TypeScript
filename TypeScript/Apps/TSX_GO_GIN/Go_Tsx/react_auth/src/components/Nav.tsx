import React from "react";
import { Link } from "react-router-dom";

interface NavProps {
  name: string;
  setName: (name: string) => void;
}
export const Nav: React.FC<NavProps> = (props) => {
  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    props.setName("");
  };
  let Menu;

  if (props.name === "") {
    Menu = (
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    );
  } else {
    Menu = (
      <ul className="flex items-center gap-4">
        <li>
          <Link onClick={logout} to="/login">
            Log out
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <>
      <nav className="bg-slate-900 text-white flex items-center justify-between px-10 py-5 fixed w-full">
        <Link to="/" className="text-2xl font-semibold">
          <h1 className="text-red-600">name: {props.name} </h1>
          Home
        </Link>
        {Menu}
      </nav>
    </>
  );
};

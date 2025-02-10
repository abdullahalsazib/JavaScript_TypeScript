/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { register } from "../api/Auth";
import { Link, useNavigate } from "react-router-dom";
import { LabelInputFild, PasswordFild, SubmitButton } from "./Login";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register({ name, email, password });
      if (name.length === 0 || password.length === 0 || email.length === 0) {
        alert("Enter input requarement!");
      } else {
        navigate("/login");
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className=" w-full h-screen flex items-center justify-center flex-col py-10">
      <div className="w-[60%] h-full   flex items-center justify-between rounded-lg shadow-xl">
        <div className="flex items-center justify-between flex-col w-[50%] h-full bg-[#F67878] p-10 rounded-s-2xl">
          <div className="flex items-center justify-between w-full ">
            <img
              src="https://wpocean.com/html/tf/pengu/assets/images/logo-2.svg"
              alt=""
            />
            <Link
              to="/login"
              className=" py-3 px-4 text-base bg-white rounded-md border-2 border-white hover:border-white hover:text-white hover:bg-red-400 duration-200"
            >
              Login
            </Link>
          </div>
          <img
            src="https://wpocean.com/html/tf/pengu/assets/images/login.png"
            alt="error"
          />
          <div className="flex items-center justify-between w-full">
            <Link
              to="/"
              className=" py-3 px-4 text-base bg-white rounded-md border-2 border-white hover:border-white hover:text-white hover:bg-red-400 duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="flex items-start py-12 px-28 justify-between flex-col w-[50%] h-full bg-white rounded-r-2xl">
          <div className="flex gap-2 flex-col font-light">
            <h1 className=" text-4xl capitalize font-bold">Signup</h1>
            <p className="text-base text-slate-400">
              Sign into your pages account
            </p>
          </div>
          <div className="w-full flex gap-5 flex-col">
            <LabelInputFild
              htmlFor="fullName"
              labelText="Full Name"
              placeholder="Your full name.."
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <LabelInputFild
              htmlFor="emailFor"
              labelText="email"
              placeholder="Your email here.."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordFild
              htmlFor="pass"
              labelText="Password"
              placeholder="Your password here.."
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* checkbox and forgor btn */}
            <div className="flex items-center justify-between flex-row">
              <span className="flex items-center justify-center gap-2 text-gray-500 opacity-80">
                <input
                  type="checkbox"
                  id="check"
                  className=" cursor-pointer w-4 h-4"
                />
                <label className=" cursor-pointer" htmlFor="check">
                  Remember Me
                </label>
              </span>
              <a href="#" className="text-[#F56061] text-[16px]">
                Forgot Password?
              </a>
            </div>
            <SubmitButton
              title="Signup"
              type="submit"
              onClick={() => handleRegister()}
            />
          </div>
          <div className=" w-full flex items-center gap-7 flex-col">
            {/* or */}
            <div className="flex items-center justify-center flex-col w-full">
              <hr className=" border-gray-300 border-t-[0.2px] rounded-full w-full" />
              <h1 className=" absolute bg-white px-5 text-[18px] uppercase ">
                or
              </h1>
            </div>
            <div className=" flex items-center justify-between text-4xl gap-4">
              <RiFacebookBoxFill />
              <RiTwitterXFill />
              <RiLinkedinBoxFill />
            </div>
            <h3 className=" text-[15px]">
              I have an account!{" "}
              <Link to="/login" className="text-[14px] text-[#F56061]">
                Login account
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

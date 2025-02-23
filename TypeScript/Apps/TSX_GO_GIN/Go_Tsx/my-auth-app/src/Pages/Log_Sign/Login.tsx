import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { AuthContext } from "../../context/AuthContext";
import { getUser, login } from "../../api/Auth";
import LineFooter from "../Dashboard/LineFooter";
import useAlertStore from "../../components/aleartStore";
import Alert from "../../components/Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const { showAlert } = useAlertStore();

  const handleLogin = async () => {
    if (email.length != 0 && password.length != 0) {
      try {
        await login({ email, password });
        const userData = await getUser();

        setUser(userData.data);
        // showAlert("Logged in successfully!", "success");
        if (user !== "") {
          navigate("/dashboard");
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        // alert();
        showAlert(error.response.data.message, "error");
        // console.log(error);
      }
    } else {
      showAlert("Fill Up the input fild!", "error");
    }
  };

  return (
    <>
      <Alert />
      <div className=" w-full h-screen flex items-center justify-center">
        <div className=" w-full md:w-[90%] lg:w-[80%] 2xl:w-[60%]  h-full lg:h-[80vh] py-0 md:py-10  flex items-center justify-between md:flex-row flex-col rounded-lg shadow-xl">
          <div className=" hidden md:flex items-center justify-between flex-col w-[50%]  h-full lg:h-[80vh] bg-[#F67878] p-10 rounded-s-2xl">
            <div className="flex items-center justify-between w-full ">
              <img
                src="https://wpocean.com/html/tf/pengu/assets/images/logo-2.svg"
                alt=""
              />
              <Link
                to="/register"
                className=" py-3 px-4 text-base bg-white rounded-md border-2 border-white hover:border-white hover:text-white hover:bg-red-400 duration-200"
              >
                Create Account
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
          <div className="flex items-start py-10 px-2 md:px-10  2xl:px-20 md:gap-0 gap-10 md:justify-between flex-col w-[90%] md:w-[50%] h-full lg:h-[80vh] bg-white rounded-r-2xl">
            <div className="flex gap-2 flex-col font-light">
              <h1 className=" text-4xl capitalize font-bold">Login</h1>
              <p className="text-base text-slate-400">
                Sign into your pages account
              </p>
            </div>
            <div className="w-full flex gap-5 flex-col">
              <LabelInputFild
                htmlFor="emailFor"
                labelText="Email"
                placeholder="demo@gmail.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <PasswordFild
                htmlFor="passwordFor"
                labelText="Password"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* checkbox and forgor btn */}
              <div className="flex items-center justify-between flex-row">
                <span className="flex items-center justify-center gap-2">
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
            </div>
            <SubmitButton
              title="Login"
              type="submit"
              onClick={() => handleLogin()}
            />
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
                Don't have an account?{" "}
                <Link to="/register" className="text-[14px] text-[#F56061]">
                  Create free account
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <LineFooter />
    </>
  );
};

export default Login;

interface LabelInputFildProps {
  type?: string;
  htmlFor: string;
  labelText: string;
  placeholder: string;
  value?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
export const LabelInputFild: React.FC<LabelInputFildProps> = (props) => {
  return (
    <>
      <div className="flex items-start flex-col">
        <label
          className="capitalize text-[16px] font-extralight text-gray-500 "
          htmlFor={props.htmlFor}
        >
          {props.labelText}
        </label>
        <input
          className="py-3 px-3 w-full border-[1px] border-gray-200 outline-none hover:border-gray-400 duration-200 text-[15px] font-light"
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          id={props.htmlFor}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export const PasswordFild: React.FC<LabelInputFildProps> = (props) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  return (
    <>
      <div className=" relative">
        <LabelInputFild
          htmlFor={props.htmlFor}
          labelText={props.labelText}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          type={eyeOpen ? "text" : props.type}
        />
        {eyeOpen ? (
          <FaEye
            className=" absolute top-[50%] right-5 text-[22px] cursor-pointer text-slate-600 duration-200"
            onClick={() => setEyeOpen(!eyeOpen)}
          />
        ) : (
          <FaEyeSlash
            className=" absolute top-[50%] right-5 text-[22px] cursor-pointer text-slate-600 duration-200"
            onClick={() => setEyeOpen(!eyeOpen)}
          />
        )}
      </div>
    </>
  );
};

interface SubmitButtonProps {
  type: "button" | "reset" | "submit";
  title: string;
  onClick?: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  return (
    <>
      <button
        className=" w-full hover:border-[2px] border-[2px] border-white py-3 px-3 cursor-pointer duration-200 hover:border-red-400 bg-[#F56061] hover:bg-white text-white hover:text-black"
        type={props.type}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </>
  );
};

import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../api/Auth";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("hello world");
    try {
      await login({ email, password });
      const userData = await getUser();
      setUser(userData.data);
      if (user !== "") {
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Login Faild " + axios.HttpStatusCode.BadRequest);
      console.error(error);
    }
  };

  return (
    <div className=" w-full h-screen flex items-center justify-center flex-col">
      <form
        onSubmit={handleLogin}
        className="flex items-center justify-center gap-5 bg-slate-50 flex-col p-5 rounded-md shadow-2xl"
      >
        <h2 className="text-3xl text-center font-bold uppercase font-mono">
          Login form
        </h2>
        <InputFild placeholder="Enter your email.." type="email" />
        <InputFild placeholder="Enter your password.." type="password" />
        {/* <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <MyButton title="Log In" type="submit" />
      </form>
    </div>
  );
};

export default Login;

interface InputFildProps {
  type: string;
  placeholder: string;
}
const InputFild: React.FC<InputFildProps> = (props) => {
  return (
    <>
      <input
        className=" border-2 border-gray-300 hover:border-gray-400 duration-200 rounded-md py-2 px-4 outline-none"
        type={props.type}
        placeholder={props.placeholder}
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};

interface MyButtonProps {
  type: "button" | "reset" | "submit";
  title: string;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  return (
    <>
      <button
        type={props.type}
        className="py-2 px-5 bg-green-400 font-semibold capitalize hover:bg-green-600 duration-200 cursor-pointer hover:text-slate-50 rounded-md shadow-2xl"
      >
        {props.title}
      </button>
    </>
  );
};

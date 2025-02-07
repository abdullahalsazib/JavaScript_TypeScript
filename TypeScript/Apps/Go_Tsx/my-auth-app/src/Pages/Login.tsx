import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../api/Auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email.length != 0 && password.length != 0) {
      try {
        await login({ email, password });
        const userData = await getUser();

        setUser(userData.data);
        if (user !== "") {
          navigate("/dashboard");
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        alert(error.message);
      }
    } else {
      alert("Plz login");
    }
  };

  return (
    <div className=" w-full h-screen flex items-center justify-center flex-col">
      <div className="flex items-center justify-center gap-5 bg-slate-50 flex-col p-5 rounded-md shadow-2xl">
        <h2 className="text-3xl text-center font-bold uppercase font-mono">
          Login form
        </h2>
        <InputFild
          placeholder="Enter your email.."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordFild
          placeholder="Enter your password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MyButton onClick={() => handleLogin()} title="Log In" type="submit" />
      </div>
    </div>
  );
};

export default Login;

interface InputFildProps {
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputFild: React.FC<InputFildProps> = (props) => {
  return (
    <>
      <input
        className=" border-2 border-gray-300 hover:border-gray-400 duration-200 rounded-md py-2 px-4 outline-none"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};

export const PasswordFild: React.FC<InputFildProps> = (props) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  return (
    <>
      <div className=" relative">
        <InputFild
          placeholder={props.placeholder}
          type={eyeOpen ? "text" : "password"}
          value={props.value}
          onChange={props.onChange}
        />
        {eyeOpen ? (
          <FaEye
            className=" absolute top-[25%] right-5 text-[20px] cursor-pointer text-slate-600 duration-200"
            onClick={() => setEyeOpen(!eyeOpen)}
          />
        ) : (
          <FaEyeSlash
            className=" absolute top-[25%] right-5 text-[20px] cursor-pointer text-slate-600 duration-200"
            onClick={() => setEyeOpen(!eyeOpen)}
          />
        )}
      </div>
    </>
  );
};

interface MyButtonProps {
  type: "button" | "reset" | "submit";
  title: string;
  onClick?: () => void;
}

export const MyButton: React.FC<MyButtonProps> = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        type={props.type}
        className="py-2 px-5 bg-green-400 font-semibold capitalize hover:bg-green-600 duration-200 cursor-pointer hover:text-slate-50 rounded-md shadow-2xl"
      >
        {props.title}
      </button>
    </>
  );
};

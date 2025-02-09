/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { register } from "../api/Auth";
import { useNavigate } from "react-router-dom";
import { InputFild, MyButton, PasswordFild } from "./Login";

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
    <div className=" w-full h-screen flex items-center justify-center flex-col">
      <div className="flex items-center justify-center gap-5 bg-slate-50 flex-col p-5 rounded-md shadow-2xl">
        <h2 className="text-3xl text-center font-bold uppercase font-mono">
          Register
        </h2>
        <InputFild
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputFild
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordFild
          placeholder="Enter your password.."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <MyButton title="Register" type="submit" onClick={handleRegister} />
      </div>
    </div>
  );
};

export default Register;

import React, { SyntheticEvent, useState } from "react";
import Button from "../components/Button";
import { Navigate } from "react-router-dom";

export const Login = (props: { setName: (name: string) => void }) => {
  const [email, setEmail] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [rederect, setRedirect] = useState<boolean>(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const content = await response.json();
    setRedirect(true);
    props.setName(content.name);
  };
  if (rederect) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <form
        onSubmit={submit}
        className="bg-slate-200 flex items-center justify-between flex-col py-5 px-4 border-2 border-gray-800 gap-4 rounded-lg"
      >
        <h1 className="font-semibold text-center text-2xl capitalize">
          Please Login
        </h1>

        <InputFild
          placeHolder="Email"
          type="email"
          handle={(e) => setEmail(e.target.value)}
        />
        <InputFild
          placeHolder="Password"
          type="password"
          handle={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" />
      </form>
    </>
  );
};

interface InputFildProps {
  type: string;
  placeHolder: string;
  handle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputFild: React.FC<InputFildProps> = (props) => {
  return (
    <>
      <input
        className=" border-2 border-green-400 py-2 px-4 hover:border-2 hover:border-slate-500 duration-200 rounded-lg cursor-pointer focus:cursor-alias"
        type={props.type}
        placeholder={props.placeHolder}
        onChange={(e) => props.handle(e)}
      />
    </>
  );
};

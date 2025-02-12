import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { InputFild } from "./Login";
import Button from "../components/Button";

export const Register = () => {
  const [name, setName] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [rederect, setRedirect] = useState<boolean>(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    setRedirect(true);
  };
  if (rederect) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <form
        onSubmit={submit}
        className="bg-slate-200 flex items-center justify-between flex-col py-5 px-4 border-2 border-gray-800 gap-4 rounded-lg"
      >
        <h1 className="font-semibold text-center text-2xl capitalize">
          Please Register
        </h1>
        <InputFild
          placeHolder="Name"
          handle={(e) => setName(e.target.value)}
          type="text"
        />
        <InputFild
          placeHolder="Email"
          handle={(e) => setEmail(e.target.value)}
          type="email"
        />
        <InputFild
          placeHolder="Password"
          handle={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Button type="submit" />
      </form>
    </>
  );
};

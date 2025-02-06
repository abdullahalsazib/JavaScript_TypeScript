import { useState, useContext } from "react";
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
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

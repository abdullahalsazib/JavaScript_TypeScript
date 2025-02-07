import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/Auth";
import { MyButton } from "./Login";

function Logout() {
  const { setUser } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log("Logout Faild -> ", error);
    }
  };
  return (
    <>
      <MyButton title="Log Out" type="submit" onClick={handleLogout} />
    </>
  );
}

export default Logout;

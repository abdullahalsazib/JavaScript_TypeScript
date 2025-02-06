import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext)!;
  return (
    <>
      <div>Dashboard {user.name} </div>
      {user.name ? "hi " + user.name : "User is not logged in"}
    </>
  );
}

export default Dashboard;

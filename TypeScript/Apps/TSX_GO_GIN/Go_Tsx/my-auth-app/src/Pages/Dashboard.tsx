import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext)!;
  return (
    <>
      <div className=" p-10">
        <div>Dashboard {user.name} </div>
        {user.name ? "hi " + user.name : "User is not logged in"}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at omnis
          perferendis.
        </h1>
        <img src={`http://localhost:8000${user.profile_pic_url}`} alt="error" />
      </div>
    </>
  );
}

export default Dashboard;

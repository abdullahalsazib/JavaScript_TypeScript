import { useEffect, useState } from "react";
import { getUserProfile } from "../api/Auth";

const Profile = () => {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    profile_pic_url: string;
  } | null>(null);

  useEffect(() => {
    getUserProfile()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <img src={user.profile_pic_url} alt="Profile" width="100" />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

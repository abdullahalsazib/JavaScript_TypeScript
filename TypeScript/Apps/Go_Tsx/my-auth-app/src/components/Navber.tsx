import { Link } from "react-router-dom";
import Logout from "../Pages/Logout";

function Navber() {
  return (
    <div>
      <div className="w-full py-5 px-10 bg-slate-900 text-white flex items-center justify-between">
        <Link to="/">Home</Link>

        <ul className="flex items-center justify-between gap-3">
          <Logout />
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navber;

import { Link } from "react-router-dom";

export const Nav = (props: {
  name: string;
  setName: (name: string) => void;
}) => {
  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    props.setName("");
  };

  return (
    <>
      <nav className="bg-slate-900 text-white flex items-center justify-between px-10 py-5 fixed w-full">
        <Link to="/" className="text-2xl font-semibold">
          Home
        </Link>
        <div>
          {props.name === "" ? (
            <ul className="flex items-center gap-4">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/register"
                >
                  Register
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={logout}
                >
                  Log Out
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

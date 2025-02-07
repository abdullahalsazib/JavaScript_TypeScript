import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./Pages/Logout";
import Navber from "./components/Navber";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import ProfileUpdate from "./Pages/ProfileUpdate";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navber />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/update" element={<ProfileUpdate />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      ;
    </>
  );
}

export default App;

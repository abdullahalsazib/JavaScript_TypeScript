import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./Pages/Logout";
import Navber from "./components/Navber";
import Dashboard from "./Pages/Dashboard";
import ProfileUpdate from "./Pages/ProfileUpdate";
import { Suspense, useEffect, useState } from "react";
import Home from "./Pages/Home";

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-15 w-15 border-t-4 border-blue-500"></div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Simulate delay
    return () => clearTimeout(timeout);
  }, [location.pathname]); // Runs on route change

  // Hide Navbar on login & register pages
  const hideNavbarRoutes = ["/login", "/register"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navber />}
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

function App() {
  return (
    <Suspense fallback={<p>Loading component...</p>}>
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}

export default App;

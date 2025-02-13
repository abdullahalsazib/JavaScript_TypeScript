import { Login } from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Nav } from "./components/Nav.tsx";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [name, setName] = useState<string>("");
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      setName(content.name);
    })();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Nav name={name} setName={setName} />

        <main className=" flex items-center justify-center bg-slate-200 h-screen w-full">
          <Routes>
            <Route path="/" element={<Home name={name} />} />
            <Route path="/login" element={<Login setName={setName} />} />
            <Route path="/register" element={<Register />} />
            {/* add some commit for git status */}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;

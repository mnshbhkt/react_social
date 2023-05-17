import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Profile from "./pages/profile/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/profile/:username" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

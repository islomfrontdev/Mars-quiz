import "./App.css";
import Layout from "./components/Layout";
import "./Styles/MainStyles/mainStyles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Quiz from "./components/Main/Quiz";
import Dashboard from "./components/Main/Dashboard";
import Users from "./components/Main/Users";
import About from "./components/Main/About";
import Contacts from "./components/Main/Contacts";
import { useEffect } from "react";
import PinCode from "./Pages/Gaming/PinCode";
import Gaming from "./Pages/Gaming/Gaming";
import UserGame from "./Pages/UserGame/UserGame";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/quiz");
  }, []);
  return (
    <div>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="users" element={<Users />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="pincode/:id" element={<PinCode />} />
        <Route path="gaming/:id" element={<Gaming />} />
        <Route path="game" element={<UserGame />} />
      </Routes>
    </div>
  );
}

export default App;

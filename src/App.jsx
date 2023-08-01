import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage/SignupPage"
import LoginPage from "./pages/LoginPage/LoginPage";
import { useState } from 'react'
import userService from "./utils/userService";





function App() {

  const [user, setUser] = useState(userService.getUser());


  function handleLoginAndSignUp() {
    setUser(userService.getUser())
  }



  return (
    <Routes>
      <Route path="/signup" element={<SignupPage handleLoginAndSignUp={handleLoginAndSignUp} />} />
      <Route path="/" element={<h1>Home Pageeeeeeeeeee</h1>} />
      <Route path="/login" element={<LoginPage handleLoginAndSignUp={handleLoginAndSignUp}/>} />
    </Routes>
  );
}

export default App;

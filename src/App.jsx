import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage/SignupPage"
import LoginPage from "./pages/LoginPage/LoginPage";
import { useState } from 'react'
import userService from "./utils/userService";
import SignUpPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage"




function App() {

  const [user, setUser] = useState(userService.getUser());


  function handleSignUp(data) {
    setUser(userService.signup(data))
  }

  function handleLogin() {
    setUser(userService.getUser())
  }



  if(!user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage handleSignUp={handleSignUp} />} />
        <Route path="/*" element={<Navigate to ="/login" />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/signup" element={<SignupPage handleSignUp={handleSignUp} />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage/SignupPage"
import LoginPage from "./pages/LoginPage/LoginPage";
import { useState } from 'react'
import userService from "./utils/userService";
import SignUpPage from "./pages/SignupPage/SignupPage";





function App() {

  const [user, setUser] = useState(userService.getUser());


  function handleSignUp(data) {
    setUser(userService.signup(data))
  }

  function handleLogin(data) {
    setUser(userService.login(data))
  }



  if(!user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage handleSignUp={handleLogin} />} />
        <Route path="/*" element={<Navigate to ="/login" />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/signup" element={<SignupPage handleSignUp={handleSignUp} />} />
      <Route path="/" element={<h1>Home Pageeeeeeeeeee</h1>} />
      <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
    </Routes>
  );
}

export default App;

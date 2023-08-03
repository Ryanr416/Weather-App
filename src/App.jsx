import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage/SignupPage"
import LoginPage from "./pages/LoginPage/LoginPage";
import { useEffect, useState } from 'react'
import userService from "./utils/userService";
import SignUpPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage"
import { propTypes } from "react-bootstrap/esm/Image";
import { SearchWeatherForm } from "./pages/HomePage/HomePage";



function App() {

  const [user, setUser] = useState(userService.getUser());
  const [weather, setWeather] = useState([])
  const [searchTerm, setSearchTerm] = useState('')



  function getWeather(weatherDetails){
  setSearchTerm(weatherDetails)
  }

  useEffect(() => {

    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=be32f322aa1e4669840163843230208&q=${searchTerm}`


    async function getWeatherInfo(data) {

      try {
        const apiResponse = await fetch(weatherUrl);

        const data = await apiResponse.json();
        console.log(data)
      } catch(err) {
        console.log(err, 'error from api call')
      }

    }

    getWeatherInfo();

  }, [searchTerm]);

  
  function handleSignUp(data) {
    setUser(userService.signup(data))
  }

  function handleLogin() {
    setUser(userService.getUser())
  }


  function handleLogout(){
    userService.logout();
  
    setUser(null)
  }



  if(!user) {
    return (
      <Routes>
        <Route path="/*" element={<Navigate to ="/login" />} />
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage handleSignUp={handleSignUp} />} />
        
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<LoginPage handleLogin={handleLogin} />} />
      <Route path="/signup" element={<SignupPage handleSignUp={handleSignUp} />} />
      <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
      <Route path="/home" element={<HomePage getWeather={getWeather}/>} />
      <Route path="/:username" element={<LoginPage user={user} handleLogout={handleLogout}/> } />
      
    </Routes>
  );
}
//  
export default App;

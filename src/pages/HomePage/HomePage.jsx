import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import "./HomePage.css";
import { Grid } from "semantic-ui-react";
import PageHeader from "../../components/Header/Header.jsx";
import userService from "../../utils/userService";


export default function HomePage({getWeather, weather}){


  // let feelsLikeC = '';
  // let condition = '';
  // let temp ='';
  // if (weather != undefined || ! weather.error) {
   
  //   feelsLikeC = weather.feelslike_c;
  //   condition = weather.condtion;
  //   temp = weather.current.temp_c;
  
  // } else {
  //   console.log('error', weather.error)
  // }

    const [user, setUser] = useState(userService.getUser());
    const [weatherFormState, setWeatherFormState] = useState('')

    function handleChange(e) {
        console.log(e.target.value)
        setWeatherFormState(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        getWeather(weatherFormState)
        setWeatherFormState('')
    }


    function handleLogout(){
        userService.logout();
      
        setUser(null)
      }
    console.log(weather)

    return (
        <form onSubmit={handleSubmit}>
                <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} user={user}/>
        </Grid.Column>
      </Grid.Row>
      {weather?
                <Card>
      <Card.Img src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>Current Temp : {weather.current.temp_c} 
        </Card.Title>
        <Card.Text>
          Feels Like : {weather.current.feelslike_c} 
          
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button className="ms-3">Add</Button>
          <Button className="me-3">Remove</Button>
        </div>
      </Card.Body>
    </Card>:null}
  </Grid>
        
            <input type="text" placeholder="Search Your Local City For Weather Updates" value={weatherFormState} onChange={handleChange} name="title" />
            <button>Search Local Weather Conditions</button>
        </form>



       

    );
    }
      
    

import { useState } from 'react'

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import "./HomePage.css";

export default function SearchWeatherForm({getWeather}){



    
    const [weatherFormState, setWeatherFormState] = useState('')

    function handleChange(e) {
        console.log(e.target.value)
        setWeatherFormState(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        getWeather(weatherFormState)
        setWeatherFormState()
    }

    return (
        <form onSubmit={handleSubmit}>
                <Card>
      <Card.Img src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>Title Text</Card.Title>
        <Card.Text>
          Here's some fillllllller text
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button className="ms-3">Add</Button>
          <Button className="me-3">Remove</Button>
        </div>
      </Card.Body>
    </Card>
  
            <input type="text" placeholder="Search Your Local City For Weather Updates" value={weatherFormState} onChange={handleChange} name="title" />
            <button>Search Local Weather Conditions</button>
        </form>





    );

    }

    <Card>
      <Card.Img src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>Title Text</Card.Title>
        <Card.Text>
          Here's some fillllllller text
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button className="ms-3">Add</Button>
          <Button className="me-3">Remove</Button>
        </div>
      </Card.Body>
    </Card>
  


    

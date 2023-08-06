import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./HomePage.css";
import { Grid } from "semantic-ui-react";
import PageHeader from "../../components/Header/Header.jsx";
import userService from "../../utils/userService";

import * as cityApi from "../../utils/cityApi";
export default function HomePage({ getWeather, weather, handleAddCity }) {
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
  const [error, setError] = useState("");
  const [cities, setCities] = useState([]);
  const [user, setUser] = useState(userService.getUser());
  const [weatherFormState, setWeatherFormState] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setWeatherFormState(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getWeather(weatherFormState);
    setWeatherFormState("");
  }

  function handleLogout() {
    userService.logout();

    setUser(null);
  }
  console.log(weather);

  async function handleAddCity(data) {
    try {
      const responseData = await cityApi.create(data);
      console.log(
        responseData,
        " ,- response from the server in handleAddCity"
      );
      setCities([responseData.data, ...cities]);
    } catch (err) {
      console.log(err, "error in handleaddcity homepage");
      setError("Error creating saved city! please try again");
    }
  }

    async function getCities() {
      try {
        const responseFromTheServer = await cityApi.getAll();
        console.log(responseFromTheServer);
        setCities(responseFromTheServer.cities);
      } catch (err) {
        console.log(err, "err in getCities");
        setError("Error fetching Cities, check console");
      }
    }

    useEffect(() => {
      getCities();
    }, []);
  
  return (
    <form onSubmit={handleSubmit}>
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <PageHeader handleLogout={handleLogout} user={user} />
          </Grid.Column>
        </Grid.Row>
        {weather ? (
          <Card>
            <Card.Img src="https://picsum.photos/200/300" />
            <Card.Body>
              <Card.Title>Current Temp : {weather.current.temp_c} C</Card.Title>
              <Card.Text>
                Feels Like : {weather.current.feelslike_c} C
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button className="ms-3" onClick={() => handleAddCity()}>
                  Add
                </Button>
                <Button className="me-3">Remove</Button>
              </div>
            </Card.Body>
          </Card>
        ) : null}
      </Grid>

      <input
        type="text"
        placeholder="Search Your Local City For Weather Updates"
        value={weatherFormState}
        onChange={handleChange}
        name="title"
      />
      <button>Search Local Weather Conditions</button>
    </form>
  )
        };

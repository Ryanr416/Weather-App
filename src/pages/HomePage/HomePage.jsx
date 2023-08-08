import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./HomePage.css";
import { Grid } from "semantic-ui-react";
import PageHeader from "../../components/Header/Header.jsx";
import userService from "../../utils/userService";
import * as cityApi from "../../utils/cityApi";

export default function HomePage({ getWeather, weather, handleAddCity, data }) {
  const [error, setError] = useState("");
  const [cities, setCities] = useState([]);
  const [user, setUser] = useState(userService.getUser());
  const [weatherFormState, setWeatherFormState] = useState("");

  // function to delete cities currently saved on the DB
  async function handleDeleteCity(data) {
    try {
      const responseData = await cityApi.deleteCity(data);

      setCities((prevCities) =>
        prevCities.filter((city) => city.name !== data)
      );
    } catch (err) {
      setError("Error deleting a city! Please try again");
    }
  }

  function handleChange(e) {
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

  // function to add a city to the DB

  // favourite function as it  cemented the useState . Was using getCities and it would never work, and i kept forgetting you have to set it into state. Learned
  // alot from this func
  async function handleAddCity(data) {
    try {
      const responseData = await cityApi.create({ name: data });
      setCities([...cities, responseData]);
    } catch (err) {
      setError("Error creating saved city! please try again");
    }
  }

  // function to get all of the cities in the DB and set them into state
  async function getCities() {
    try {
      const responseFromTheServer = await cityApi.getAll();
      setCities(responseFromTheServer.cities);
    } catch (err) {
      setError("Error fetching Cities, check console");
    }
  }

  useEffect(() => {
    getCities();
  }, []);

  // this const maps over all of the cities in the DB, finds the corresponding city you clicked delete on, and removes it from the DB
  const allCities = cities?.map((city) => (
    <li key={city._id}>
      {city.name}
      <Button className="ms-3" onClick={() => handleDeleteCity(city.name)}>
        Remove
      </Button>
    </li>
  ));

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
            <Card.Img src={weather.current.condition.icon} />
            <Card.Body>
              <Card.Title>Current Temp : {weather.current.temp_c} C</Card.Title>
              <Card.Text>
                Feels Like : {weather.current.feelslike_c} C
              </Card.Text>
              <Card.Text>{weather.current.condition.text}</Card.Text>

              <div className="d-flex justify-content-between">
                <Button
                  className="ms-3"
                  onClick={() => handleAddCity(weatherFormState)}
                >
                  Add
                </Button>
              </div>
            </Card.Body>
          </Card>
        ) : null}

        <ul>{allCities}</ul>
      </Grid>

      <input
        type="text"
        placeholder="Please Enter Your City"
        value={weatherFormState}
        onChange={handleChange}
        name="title"
      />
      <button>Search Local Weather Conditions</button>
    </form>
  );
}

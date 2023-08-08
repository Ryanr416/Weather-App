import React from "react";
import "./LoginPage.css";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function LoginPage({ handleLogin }) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // login function that renders the homepage after you login and sets your user info into state
    try {
      await userService.login(state);
      Navigate("/home");
      handleLogin();
    } catch (err) {
      setError("check terminal or console for error");
    }
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="https://t4.ftcdn.net/jpg/02/66/38/15/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg" />{" "}
          Log-in to your account
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />

            <Button type="submit" color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
          <Message>
            New to Us? <Link to="/signup">Sign up</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}

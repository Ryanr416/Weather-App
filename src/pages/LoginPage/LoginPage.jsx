import React from 'react';
import './LoginPage.css';
import userService from '../../utils/userService';
import { Navigate } from 'react-router-dom';
import {useState} from 'react'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
  } from "semantic-ui-react";
  import { Link, useNavigate} from 'react-router-dom'





export default function LoginPage({handleLoginAndSignUp}){
   const [state, setState] = useState ({
    email: '',
    password: ''
   })



   const [error, setError] = useState('')




   async function handleSubmit(e) {
    e.preventDefault();


    try{
      await userService.login(state)
      Navigate('/')
      handleLoginAndSignUp
    }catch(err){
      console.log(err)
      setError('check terminal or console for error')
    }

   }

   function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
   }

    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
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

          <Button type="submit" color='teal' fluid size='large'>
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


import React from 'react';
import './LoginPage.css';
import userService from '../../utils/userService';
import { Navigate } from 'react-router-dom';


export default function LoginPage({handleLoginAndSignup}){
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
      handleLoginAndSignup
    }catch(err){
      console.log(err)
      setError('check terminal or console for error')
    }

   }


    return (
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="purple" textAlign="center">
          <Image src="https://i.imgur.com/TM4eA5g.jpg" /> Login
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

            <Button type="submit" className="btn">
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


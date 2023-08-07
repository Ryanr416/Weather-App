import { useState } from "react"
import { useNavigate } from "react-router-dom";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import userService from '../../utils/userService'
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
  } from "semantic-ui-react";


export default function SignUpPage({handleSignUp}) {

    const [state, setState] = useState({
            username: '',
            email: '',
            password: '',
            passwordConf: '',
            bio: ''
    })

    const [error, setError] = useState(''); 
    const [selectedFile, setSelectedFile] = useState('')
    const navigate = useNavigate()
    function handleFileInput(e){
        setSelectedFile(e.target.files[0])
    }


    // handlechange is being used to detect what key is being typed
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }



 async function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();

    formData.append('photo', selectedFile);
    formData.append('username', state.username);
    formData.append('password', state.password);
    formData.append('email', state.email);
    formData.append('bio', state.bio);

    console.log(formData)
  
    try {
        const signUp = await userService.signup(formData) ;
        // console.log(signUp)
        navigate('/')
        handleSignUp();
    }catch(err) {
     
        console.log(err, 'error in handle');
        setError('Check your terminal or console for error');
    }

 }
return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
       <Header as="h2" color="teal" textAlign="center">
        <Image src="" /> Sign Up
      </Header>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input
            name="username"
            placeholder="username"
            value={state.username}
            onChange={handleChange}
            required
          />
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
          <Form.Input
            name="passwordConf"
            type="password"
            placeholder="Confirm Password"
            value={state.passwordConf}
            onChange={handleChange}
            required
          />
          <Form.TextArea
            label="bio"
            name="bio"
            placeholder="Tell us about yourself"
            value={state.bio}
            onChange={handleChange}
          />
          <Form.Field>
            <Form.Input
              type="file"
              name="photo"
              placeholder="upload profile pic"
              onChange={handleFileInput}
            />
          </Form.Field>
          <Button type="submit" className="btn">
            Signup
          </Button>
        </Segment>
        {error ? <ErrorMessage error={error} /> : null}
      </Form>
    </Grid.Column>
  </Grid>

    );

}



import { Header, Segment, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';







export default function PageHeader({ user, handleLogout }) {
  return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

    </>
  );
}













{/* 


//     <Segment clearing>
//       <Header as="h2" floated="right">
//         <Link to="/">
//           <Icon name="home"></Icon>
//         </Link>
//         <Link to="" onClick={handleLogout}>
//           Logout
//         </Link>
//       </Header>
//       <Header as="h2" floated="left">
//         <Link to={`/${user?.username}`}>
//           <Image
//             src={
//               user?.photoUrl
//                 ? user?.photoUrl
//                 : "https://react.semantic-ui.com/images/wireframe/square-image.png"
//             }
//             avatar
//           ></Image>
//         </Link>
//       </Header>
//     </Segment>
//   );
// } */}

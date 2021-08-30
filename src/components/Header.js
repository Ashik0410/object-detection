import {Navbar, Container, FormControl, Dropdown, Nav} from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
	return(
		<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className="main-text">
    <Link to="/"> Shopping Cart </Link>
    </Navbar.Brand>
    <Navbar.Text className="search">  
    <FormControl placeHolder='search a product'/>
    </Navbar.Text>
    <Nav>
      <Dropdown alignRight>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <FaShoppingCart color="white" fontSize="25px"/>
  </Dropdown.Toggle>

  <Dropdown.Menu style={{minWidth: 370}}>
  <span style={{padding :10}}> Cart is empty </span>
  </Dropdown.Menu>
  </Dropdown>
    </Nav>
    </Container>
    </Navbar>

		);
}
export default Header;
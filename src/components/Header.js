import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown'
const Header = () => {
	return(
		<Container>
		<Navbar>Ashik</Navbar>
		<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="https://shopping-cart-by-ashik.netlify.app/" target="_blank">shoe</Dropdown.Item>
    <Dropdown.Item href="#/action-2">bag</Dropdown.Item>
    <Dropdown.Item href="#/action-3">shirt</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
		</Container>

		);
}
export default Header;
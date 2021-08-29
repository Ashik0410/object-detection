import {Navbar, Container, FormControl} from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/Dropdown'
const Header = () => {
	return(
		<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>
    <a href="/"> Shopping Cart </a>
    </Navbar.Brand>
    <Navbar.Text className="search">
    <FormControl style={{widht : 500}} placeHolder='search a product'/>
    </Navbar.Text>
    </Container>
    </Navbar>

		);
}
export default Header;
import { Nav, Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom";


const NavbarComponent = () => {
    return (<>
        <Navbar bg='light' expand=''>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    Ererw3 Drive
                </Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to='/user'>
                        Profile
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>        
    </>)
}

export default NavbarComponent;
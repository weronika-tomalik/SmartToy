import React, {useContext} from 'react';
import {Container, Navbar, NavLink, Nav, NavbarBrand, NavDropdown } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {ThemeContext} from "../store/ThemeContext";
import '../assets/scss/main.scss'


const Navigation = () => {

    const { isDarkTheme, toggleTheme } = useContext(ThemeContext)

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    }
    return (

            <Navbar className={`navigation shadow-sm ${isDarkTheme ? 'darkTheme' : 'lightTheme'}`}>
                <Container>
                    <NavbarBrand className='navigation__brand'>SmartToys</NavbarBrand>
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link" onClick={() => handleNavigate('/')}>Home</NavLink>
                        <NavLink to="/" className="nav-link" onClick={() => handleNavigate('newtoy')}>Add toy</NavLink>
                        <NavLink to="/" className="nav-link" onClick={() => handleNavigate('/newlistoftoys')}>New toy set</NavLink>
                        <NavDropdown title="Your toys" id="collapsible-nav-dropdown">
                            <NavDropdown.Item to="/" className="nav-link navigation__dropdown" onClick={() => handleNavigate('/toystructural')}>Structural toys</NavDropdown.Item>
                            <NavDropdown.Item to="/" className="nav-link navigation__dropdown" onClick={() => handleNavigate('/toyinteractive')}>Interactive toys</NavDropdown.Item>
                            <NavDropdown.Item to="/" className="nav-link navigation__dropdown" onClick={() => handleNavigate('/toymovement')}>Movement toys</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink onClick={toggleTheme}>Change Theme</NavLink>
                    </Nav>
                </Container>
            </Navbar>

    );
};

export default Navigation;
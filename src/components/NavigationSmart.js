import React from 'react';
import {Container, Navbar, NavLink, Nav, NavbarBrand, NavDropdown } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const NavigationSmart = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    }
    return (
        <>
            <Navbar className='shadow-sm' style={{minWidth: '100vw', background: 'rgba(215,163,208,0.5)'}}>
                <Container>
                    <NavbarBrand style={{fontWeight: '500', fontSize: '25px'}}>SmartToys</NavbarBrand>
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link" onClick={() => handleNavigate('/')}>Home</NavLink>
                        <NavLink to="/" className="nav-link" onClick={() => handleNavigate('newtoy')}>Add toy</NavLink>
                        <NavLink to="/" className="nav-link" onClick={() => handleNavigate('/newlistoftoys')}>New toy set</NavLink>
                        <NavDropdown title="Your toys" id="collapsible-nav-dropdown">
                            <NavDropdown.Item to="/" className="nav-link" onClick={() => handleNavigate('/toystructural')}>Structural toys</NavDropdown.Item>
                            <NavDropdown.Item to="/" className="nav-link" onClick={() => handleNavigate('/toyinteractive')}>Interactive toys</NavDropdown.Item>
                            <NavDropdown.Item to="/" className="nav-link" onClick={() => handleNavigate('/toymovement')}>Movement toys</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationSmart;
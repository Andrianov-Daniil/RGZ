import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = () => {
    const {user} = useContext(Context);
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className = "logo" to={SHOP_ROUTE}><i class='bx bx-building-house'/>Мир квартир</NavLink>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
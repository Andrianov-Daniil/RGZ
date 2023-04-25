import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const NavBar = observer( () => {
    const {user} = useContext(Context);
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className = "logo" to={SHOP_ROUTE}><i class='bx bx-building-house'/>Мир квартир</NavLink>
                {user.isAuth /*&& user.role == "ADMIN"*/ ?
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'} className="button">Админ панель</Button>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(!user.isAuth)}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant='outline-light' onClick={() => user.setIsAuth(!user.isAuth)}>Войти</Button>
                    </Nav>
            }
            </Container>
        </Navbar>
    )
});

export default NavBar;
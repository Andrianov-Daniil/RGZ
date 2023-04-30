import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = observer( () => {
    const {user} = useContext(Context);
    const history = useHistory();
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className = "logo" to={SHOP_ROUTE}><i class='bx bx-building-house'/>Мир квартир</NavLink>
                {user.isAuth /*&& user.role == "ADMIN"*/ ?
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'} onClick={() => history.push(ADMIN_ROUTE)} className="button">Админ панель</Button>
                        <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE)}>Выйти</Button>
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
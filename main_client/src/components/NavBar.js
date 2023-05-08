import React, { useContext } from "react";
import { Context } from "../index";
import {Container, Nav, Navbar, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {observer} from "mobx-react-lite";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavLink style = {{color: 'white'}} to={SHOP_ROUTE}>Мир квартир</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'}>
                            Админ панель
                        </Button>
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={'outline-light'} className="NavBar" onClick={() => user.setIsAuth(!user.isAuth)} >
                                Выйти
                            </Button>
                        </NavLink>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <NavLink to={LOGIN_ROUTE}>
                            <Button to={LOGIN_ROUTE} variant={'outline-light'} onClick={() => user.setIsAuth(!user.isAuth)}>
                                Авторизация
                            </Button>
                        </NavLink>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar;
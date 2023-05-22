import React, { useContext } from "react";
import { Context } from "../index";
import {Container, Nav, Navbar, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {observer} from "mobx-react-lite";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import logo from '../assets/1.png'
import Image from "react-bootstrap/Image";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false);
        user.setIsAdmin(false);
    }

    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavLink className="logo" to={SHOP_ROUTE}> <Image className="logo_img" width={35} height={35} src={logo}/>Мир квартир</NavLink>
                 {(user.isAuth) ? 
                    <Nav className="ml-auto">
                        {(user.user.role === "ADMIN") ?
                            <Button variant={'outline-light'}  onClick={() => history.push(ADMIN_ROUTE)}>
                                Админ панель
                            </Button>
                            :
                            <></>
                        }
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={'outline-light'} className="NavBar" onClick={() => {logOut(); localStorage.clear();}} >
                                Выйти
                            </Button>
                        </NavLink>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE)}>
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
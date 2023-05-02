import React from "react";
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink} from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { observer } from 'mobx-react-lite';
import { registation } from "../http/userAPI";
import { useState } from "react";

const Auth = observer( () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        const response = await registation(email, password);
        console.log(response);
    }

    return(
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card className="auth p-4">
                <h2 className="m-auto pb-3">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />

                    {isLogin ?
                        <line className="d-flex justify-content-between mt-3">
                            <div>
                                Нет аккаунта?<br/> <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь!</NavLink>
                            </div>
                            <Button 
                                variant={"outline-success"}
                                onClick={signIn}
                            >
                                Войти
                            </Button>
                        </line>
                        :
                        <line className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            <div className="mt-2">
                                Есть аккаунт? <br/><NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                            <Button 
                                variant={"outline-success"}
                                onClick={signIn}
                            >
                                Зарегестрироваться
                            </Button>
                        </line>
                    }
                </Form>
            </Card>
        </Container>
    )
});

export default Auth;
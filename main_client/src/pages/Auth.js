import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import { login, registration } from '../http/userAPI';
import { observer } from "mobx-react-lite";
import { Context } from '../index';


const Auth = observer (() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            let data;
            if(isLogin){
                data = await login(email, password);
            }else{
                data = await registration(email, password);
            }
            console.log(user);
            user.setUser(data);
            // user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        }
        catch(e){
            alert("ХЗ");
        }
    }

    return(
        <Container
            className="d-flex justify-content-center align-items-center Auth"
        >
        {!user.isAuth ? 
            <Card style={{width: 600}} className="p-3">
                <h2 className="m-auto mb-4">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3'
                        placeholder="Введите email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder="Введите пароль..."
                        value={password}
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Row className="d-flex justify-content-between mt-2 pl-3 pr-3">
                        <Col className='m-2'>
                        {isLogin ?
                            <div>
                                Нет аккаунта?<br/><NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <br/><NavLink to={LOGIN_ROUTE}>Войти!</NavLink>
                            </div>
                        }
                        </Col>
                        <Col className='m-2'>
                        {isLogin ? 
                            <Button
                                className='button_log_1'
                                variant={"outline-success"}
                                onClick={click}
                            >
                                Войти
                            </Button>
                        :
                            <Button
                                className='button_log_2'
                                variant={"outline-success"}
                                onClick={click}
                            >
                                Регистрация
                            </Button> 
                        }
                        </Col>
                    </Row>
                </Form>
            </Card>
            :
            history.push(SHOP_ROUTE)
        }
        </Container>
    )
})

export default Auth;
import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
//import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = () => {
    const location = useLocation();
    console.log(location);
    const isLogin = location.pathname === LOGIN_ROUTE;
    return(
        <Container
            className="d-flex justify-content-center align-items-center Auth"
        >
            <Card style={{width: 600}} className="p-3">
                <h2 className="m-auto">{isLogin ? 'Авторизация' :'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3'
                        placeholder="Введите email..."
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder="Введите пароль..."
                    />

                    <Row className="d-flex justify-content-between mt-2 pl-3 pr-3">
                        <Col className='m-2'>
                        {isLogin ?
                            <div>
                                Нет аккаунта?<br/><NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <br/><NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        </Col>
                        <Col className='m-2'>
                        {isLogin ? 
                            <Button
                                className='button_log_1'
                                variant={"outline-success"}
                                //onClick={click}
                            >
                                Войти
                            </Button>
                        :
                            <Button
                                className='button_log_2'
                                variant={"outline-success"}
                                //onClick={click}
                            >
                                Регистрация
                            </Button> 
                        }
                        </Col>
                    </Row>


                </Form>
            </Card>
        </Container>
    )
}

export default Auth;
import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import { login, registration, check } from '../http/userAPI';
import { observer } from "mobx-react-lite";
import { Context } from '../index';


const Auth = observer (() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat_password, setRepeat_password] = useState('');
    const [phone, setPhone] = useState('');

    const mailRegEx = {
        ename: /^[\w.*-]+/,
        edog:  /^([\w.*-]+@)/,
        ecom:  /^([\w.*-]+@([\w]+\.)+[\w]{2,4})?$/
    }

    const click = async () => {
        try{
            let data;
            if (email === ""){
                return alert("Введите email!");
            }
            if (!mailRegEx.ename.test(email)) {
                return alert("Недопустимые символы в email!");
            }
            if (!mailRegEx.edog.test(email)) {
                return alert("Email должен содержать символ @!");
            } 
            if (!mailRegEx.ecom.test(email)) {
                return alert("Неправильный домен почты!");
            }
            if(password === ""){
                return alert("Введите пароль!");
            }

            if(isLogin){
                data = await login(email, password);
                if(data.id){
                    user.setUser(data);
                    console.log(user);
                    history.push(SHOP_ROUTE);
                    user.setIsAuth(true);
                }
                
                // user.setUser(data);
                // user.setIsAuth(true);
                // history.push(SHOP_ROUTE);
            }else{
                if(repeat_password != password){
                    setPassword("");
                    setRepeat_password("");
                    return alert("Пароли не совпадают!");
                }
                if(phone === ""){
                    return alert("Введите номер телефона!");
                }
                data = await registration(email, password, phone);
                history.push(LOGIN_ROUTE);
            }
        }
        catch(e){
            alert(e.response.data.message);
        }
    }

    return(
        <Container
            className="d-flex justify-content-center align-items-center Auth"
        >
        {!user.isAuth ? 
            <Card style={{width: 650}} className="p-3">
                <h2 className="m-auto mb-4">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <h6 className="mt-3">Email:</h6>
                    <Form.Control
                        name='email'
                        placeholder="Введите email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h6 className="mt-3">Пароль:</h6>
                    <Form.Control
                        placeholder="Введите пароль..."
                        value={password}
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                    {isLogin ? 
                        <></>
                        :
                        <>
                            <h6 className="mt-3">Повторите пароль:</h6>
                            <Form.Control
                                placeholder="Повторите пароль..."
                                value={repeat_password}
                                type='password'
                                onChange={e => setRepeat_password(e.target.value)}
                            />

                            <h6 className="mt-3">Телефон:</h6>
                            <Form.Control
                                placeholder="Введите номер телефона..."
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </>
                    }

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
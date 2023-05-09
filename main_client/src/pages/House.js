import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import { Context } from '..';
//import {fetchOneDevice} from "../http/deviceAPI";

const House = () => {
    const house = {id: 1, price: "10000", name:"Домик", typeId: "1", userId: "1", img:'https://media.istockphoto.com/id/962028108/pl/wektor/dom-z-kresk%C3%B3wek-i-s%C5%82o%C5%84ce-na-polu-trawiastym.jpg?s=1024x1024&w=is&k=20&c=AjTBE4G-3lDmCXztwNF_ULHheZeJW73WiUzsFo660I0='};
    const description = [
        {id:1, title:'qwe', description: 'rty'},
        {id:2, title:'qwe', description: 'rty'},
        {id:3, title:'qwe', description: 'rty'},
        {id:4, title:'qwe', description: 'rty'},
        {id:5, title:'qwe', description: 'rty'},
    ]
    return(
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={house.img}/>
                </Col>
                <Col md={4} className='my-auto'>
                    <h2 className='text-center'>{house.name}</h2>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{house.price} ₽/мес.</h3>
                        <Button variant={"outline-dark"}>Связаться с владельцем</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

{/* {house.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )} */}

export default House;
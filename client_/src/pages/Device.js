import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const Device = () => {
    const device = {id: 6, name: '15 pro', price: 110000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NepTStjipxyh_gm9vhvJpdmvi4QxaxaTIx4S7jWR9A&s'};
    const description = [
        {id: 1, title:'оперативаная память', description: "5 гб"},
        {id: 2, title:'оперативаная память', description: "5 гб"},
        {id: 3, title:'оперативаная память', description: "5 гб"},
        {id: 4, title:'оперативаная память', description: "5 гб"},
        {id: 5, title:'оперативаная память', description: "5 гб"},
    ]
    return(
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="d-flex flex-column align-items-center">
                            <h2>{device.name}</h2>
                            <div className=" d-flex align-items-center justify-content-center star"
                                
                            >
                                {device.rating}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justidy-content-around"
                        style={{widht:300, height: 300, fontSize: 32, border: '5px solid lightgrey'}}
                    >

                        <h3 style={{padding: 60}}>{device.price} Руб.</h3>
                        <Button variant="outline-dark">Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-4">
                <h1>Характеристики:</h1>
                {description.map(info =>
                    <Row key={info.id} className="m-1">
                        {info.title}: {info.description}
                    </Row>    
                )}
            </Row>
        </Container>
    )
}

export default Device;
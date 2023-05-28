import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import { Context } from '..';
import { fetchOneHouse } from '../http/houseAPI';


const House = () => {
    const [house, setHouse] = useState({info: [], add:[]});
    const {id} = useParams();
    useEffect(() => {
        fetchOneHouse(id).then(data => setHouse(data));
    }, []);

    return(
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + house.img}/>
                </Col>
                <Col md={4} className='my-auto address'>
                    {house.add.map((info, index) => 
                        <Row key={info.id} style={{background: 'transparent', padding: 10}}>
                            Город: {info.city} <h/>
                            Улица: {info.street} <h/>
                            Номер дома: {info.street} <h/>
                            {info.entrance === null ?
                                <></>
                                :
                                <>
                                    Подъезд: {info.entrance} <h/>
                                </>
                            }
                            {info.flat === null ?
                                <></>
                                :
                                <>
                                    Квартира: {info.flat} <h/>
                                </>
                            }
                        </Row>
                    )}
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
            <h1>Характеристики</h1>
            <Row className="d-flex flex-column m-3">
                {house.info.map((info, index) => 
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
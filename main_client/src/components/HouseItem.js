import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { HOUSE_ROUTE } from "../utils/consts";

const HouseItem = ({house}) => {
    const history = useHistory();
    return(
        <Col md={4}>
            <div className="Card">
                <Card border="primary" height={250} style={{cursor: 'pointer'}} onClick={() => history.push(HOUSE_ROUTE + '/' + house.id)}>
                    <Card.Img height={250} variant="top" src={process.env.REACT_APP_API_URL + house.img} />
                    <Card.Body>
                    <Card.Title>{house.price} ₽/мес.</Card.Title>
                    <Card.Text>
                        Город: {house.add[0].city} <br/>
                        Улица: {house.add[0].street} <br/>
                        Номер дома: {house.add[0].street} <br/>
                        {house.add[0].entrance === null ?
                            <><br/></>
                            :
                            <>
                                Подъезд: {house.add[0].entrance} <br/>
                            </>
                        }
                        {house.add[0].flat === null ?
                            <><br/></>
                            :
                            <>
                                Квартира: {house.add[0].flat} <br/>
                            </>
                        }
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

export default HouseItem;
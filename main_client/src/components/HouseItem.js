import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { HOUSE_ROUTE } from "../utils/consts";

const HouseItem = ({house}) => {
    const history = useHistory()
    return(
        <Col md={3} className="m-3" onClick={() => history.push(HOUSE_ROUTE + '/' + house.id)}>
            <Card
                style={{cursor: 'pointer', width: 150}}
                border={"light"}
                className="p-3"
            >
                <Image width={150} height={150} src={house.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Name...</div>
                </div>
                <div>{house.price} ₽/мес.</div>
            </Card>
        </Col>
    )
}

export default HouseItem;
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import {observer} from "mobx-react-lite";
import HouseList from "../components/HouseList";
import { Context } from "..";
import { fetchTypes, fetchHouses } from "../http/houseAPI";

const Shop = observer( () => {
    const {house} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => house.setTypes(data));
        fetchHouses().then(data => house.setHouses(data.rows));
    }, [])
    
    return(
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <HouseList/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop;
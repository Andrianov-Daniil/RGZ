import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import {observer} from "mobx-react-lite";
import HouseList from "../components/HouseList";
import { Context } from "..";
import { fetchTypes, fetchHouses } from "../http/houseAPI";
import Pages from "../components/Pages";

const Shop = observer( () => {
    const {house} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => house.setTypes(data));
        fetchHouses(null, 1, 2).then(data => {
            house.setHouses(data.rows);
            house.setTotalCount(data.count);
        })
    }, [])

    useEffect(() => {
        fetchHouses(house.selectedType.id, house.page, 3).then(data => {
            house.setHouses(data.rows);
            house.setTotalCount(data.count);
        })
    }, [house.page, house.selectedType, house.selectedBrand,])
    
    return(
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <HouseList/>
                    <Pages />
                </Col>
            </Row>
        </Container>
    )
})

export default Shop;
import React from "react";
import { Container, Col } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import Row from 'react-bootstrap/Row';
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return(
        <Container>
            <Row className="mt-4">
                <Col md = {3}>
                    <TypeBar/>
                </Col>
                <Col md = {9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop;
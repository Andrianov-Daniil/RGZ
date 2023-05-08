import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import HouseList from "../components/HouseList";

const Shop = () => {
    return(
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col>
                    <HouseList/>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop;
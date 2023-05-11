import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import {observer} from "mobx-react-lite";
import HouseList from "../components/HouseList";
import { Context } from "..";

const Shop = observer( () => {
    const {user} = useContext(Context)
    console.log(user);
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
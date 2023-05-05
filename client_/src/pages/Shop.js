import React, { useContext, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import Row from 'react-bootstrap/Row';
import DeviceList from "../components/DeviceList";
import { Context } from "../index";
import { fetchTypes, fetchBrands, fetchDevices } from "../http/deviceAPI";

const Shop = () => {
    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevices().then(data => device.setDevices(data.rows));
    }, [])
    
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
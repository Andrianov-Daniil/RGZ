import React, { useContext } from "react";
import Row from 'react-bootstrap/Row';
import { Card, Col, Container } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const BrandBar = observer( () => {
    const {device} = useContext(Context);
    return(
        <Col className="d-flex mr-3">
            {device.brands.map(brand =>
                <Card
                    style={{cursor: "pointer"}}
                    key = {brand.id}
                    className="p-3"
                    onClick={ () => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Col>
    )
});

export default BrandBar;
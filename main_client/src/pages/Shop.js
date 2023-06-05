import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Dropdown, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import {observer} from "mobx-react-lite";
import HouseList from "../components/HouseList";
import { Context } from "..";
import { fetchTypes, fetchHouses } from "../http/houseAPI";
import Pages from "../components/Pages";

const Shop = observer( () => {
    const {house} = useContext(Context);

    const [upPrice, setUpPrice] = useState('');
    const [lowPrice, setLowPrice] = useState('');

    useEffect(() => {
        fetchTypes().then(data => {console.log(data); house.setTypes(data)});
        // fetchHouses(null, 1, 100).then(data => {
        //     const cities = data.rows.map(row => row.add[0].city);
        //     const uniqueCities = Array.from(new Set(cities));
        //     const jsonString = JSON.stringify(uniqueCities);
        //     house.setCitys([jsonString]);
        //     console.log(house.citys);
        // })
        fetchHouses(null, 1, 3).then(data => {
            house.setHouses(data.rows);
            house.setTotalCount(data.count);
        })
    }, [])

    useEffect(() => {
        fetchHouses(house.selectedType.id, house.page, 3, house.city, upPrice, lowPrice).then(data => {
            house.setHouses(data.rows);
            house.setTotalCount(data.count);
        })
    }, [house.page, house.selectedType, lowPrice, upPrice])
    
    return(
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    {/* <Form>
                        <Dropdown>
                            <Dropdown.Toggle>{house.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {house.citys.map(city => 
                                    <Dropdown.Item 
                                        onClick={() => house.setSelectedCity(city)} 
                                        key={city}
                                    >
                                        city
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form> */}
                    <TypeBar />
                    <div className="mt-3">Укажите стоимость</div>
                    <Row className="mt-3">
                        <Col>
                            <Row>
                                <Col md={1}>
                                    <div className="lowPrice">От</div>
                                </Col>
                                <Col md={9}>
                                    <Form.Control
                                        placeholder="От"
                                        value={upPrice}
                                        maxlength="16"
                                        onChange={e => {house.setPage(1); setUpPrice(e.target.value)}}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col md={1}>
                                    <div className="lowPrice">до</div>
                                </Col>
                                <Col md={9}>
                                    <Form.Control
                                        placeholder="до"
                                        value={lowPrice}
                                        maxlength="16"
                                        onChange={e => setLowPrice(e.target.value)}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
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
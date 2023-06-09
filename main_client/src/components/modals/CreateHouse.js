import React, {useContext, useEffect, useState} from 'react';

import { Form, Button, Dropdown, Row, Col, Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { fetchTypes, createHouse, fetchHouses } from '../../http/houseAPI';

const CreateHouse = observer(({show, onHide}) => {
    const {house} = useContext(Context);
    const {user} = useContext(Context);
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [square, setSquere] = useState('');
    const [number, setNumber] = useState('');
    const [entrance, setEntrance] = useState('');
    const [flat, setFlat] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => house.setTypes(data));
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const onlyNumbers = (input) => {
        const filteredInput = input.replace(/\D/g, '');
        return filteredInput;
    }


    const addHouse = () => {
        if(house.selectedType.name === undefined){
            return alert("Выберите тип");
        }
        if(square === ""){
            return alert("Введите площадь помещения в квадратных метрах");
        }
        if(city === ""){
            return alert("Введите название города");
        }
        if(street === ""){
            return alert("Введите название улицы");
        }
        if(number === ""){
            return alert("Введите номер дома");
        }
        if (price === ""){
            return alert('Укажите стоимость за месяц');
        }
        if (Number(price) <= 100 ){
            return alert('Укажите корректную стоимость за месяц');
        }
        if (entrance && !flat){
            return alert('Укажите номер квартиры');
        }
        if (file === null){
            return alert('Добавьте фото квартиры');
        }

        const formData = new FormData();
        formData.append('square', square);
        formData.append('city', city);
        formData.append('street', street);
        formData.append('number', number);
        formData.append('entrance', entrance);
        formData.append('flat', flat);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('typeId', house.selectedType.id);
        formData.append('userId', user.user.id);
        formData.append('info', JSON.stringify(info));
        createHouse(formData).then(data => onHide());
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>{house.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {house.types.map(type => 
                                <Dropdown.Item 
                                    onClick={() => house.setSelectedType(type)} 
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
                <Form.Control value={square} maxlength="5" className='mt-2' placeholder='Площадь в квадратныйх метрах...' onChange={e => setSquere(onlyNumbers(e.target.value))}/>
                <Form.Control value={city} maxlength="30" className='mt-2' placeholder='Город...' onChange={e => setCity(e.target.value)}/>
                <Form.Control value={street} maxlength="150" className='mt-2' placeholder='Название улицы...' onChange={e => setStreet(e.target.value)}/>
                <Form.Control value={number} maxlength="5" className='mt-2' placeholder='Номер дома...' onChange={e => setNumber(e.target.value)}/>
                <Form.Control value={entrance} maxlength="2" className='mt-2' placeholder='Подъёзд (если имеется)...' onChange={e => setEntrance(e.target.value)}/>
                <Form.Control value={flat} maxlength="4" className='mt-2' placeholder='Номер квартиры (если имеется)...' onChange={e => setFlat(e.target.value)}/>
                <Form.Control value={price} maxlength="7" className='mt-2' placeholder='Стоимость за месяц в рублях...' onChange={e => setPrice(onlyNumbers(e.target.value))}/>
                <Form.Control className='mt-2' type='file' onChange={selectFile} />        
                <hr/>
                <Button onClick={addInfo} className='mb-2'>Добавить новое свойство</Button>
                {info.map(i => 
                    <Row className='mb-2' key={i.number}>
                        <Col md={4}>
                            <Form.Control 
                                value={i.title}
                                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                placeholder='Введите название свойства'
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control 
                                value={i.description}
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                placeholder='Введите описание свойства'
                            />
                        </Col>
                        <Col md={4}>
                            <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>Удалить</Button>
                        </Col>
                    </Row>
                )}
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide} >Закрыть</Button> 
                <Button variant='outline-success' onClick={addHouse}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateHouse;

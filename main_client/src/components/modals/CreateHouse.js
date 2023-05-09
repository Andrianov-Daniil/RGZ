import React, {useContext, useEffect, useState} from 'react';
import { Form, Button, Dropdown, Row, Col, Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const CreateHouse = observer(({show, onHide}) => {
    const {house} = useContext(Context);
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState(0);
    // const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    // useEffect(() => {
    //     fetchTypes().then(data => house.setTypes(data));
    // }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    // const changeInfo = (key, value, number) => {
    //     setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    // }

    // const selectFile = e => {
    //     setFile(e.target.files[0]);
    // }

    // const addHouse = () => {
    //     console.log(info);
    //     const formData = new FormData()
    //     formData.append('name', name)
    //     formData.append('price', `${price}`)
    //     formData.append('img', file)
    //     formData.append('brandId', house.selectedBrand.id)
    //     formData.append('typeId', house.selectedType.id)
    //     formData.append('info', JSON.stringify(info))
    //     createHouse(formData).then(data => onHide())
    // }

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
                        <Dropdown.Toggle>Вберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {house.types.map(type => 
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
                <Form.Control className='mt-2' placeholder='Город...'/>
                <Form.Control className='mt-2' placeholder='Название улицы...'/>
                <Form.Control className='mt-2' placeholder='Номер дома...'/>
                <Form.Control className='mt-2' placeholder='Подъёзд (если имеется)...'/>
                <Form.Control className='mt-2' placeholder='Номер квартиры (если имеется)...'/>
                <Form.Control className='mt-2' type='file' />        
                <hr/>
                <Button onClick={addInfo} className='mb-2'>Добавить новое свойство</Button>
                {info.map(i => 
                    <Row className='mb-2' key={i.number}>
                        <Col md={4}>
                            <Form.Control placeholder='Введите название свойства'></Form.Control>
                        </Col>
                        <Col md={4}>
                            <Form.Control placeholder='Введите описание свойства'></Form.Control>
                        </Col>
                        <Col md={4}>
                            <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>Удалить</Button>
                        </Col>
                    </Row>
                )}
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide} >Закрыть</Button> 
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateHouse;
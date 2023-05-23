import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { deleteType } from '../../http/houseAPI';

const DeleteType = ({show, onHide}) => {
    const [value, setValue] = useState('');
    
    const delType = () =>{
        if(value === ""){
            return alert("Введите название типа");
        }
        deleteType({name: value}).then(data => {
            setValue('');
            onHide();
        })
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder='Введите название типа'
                    />
                </Form>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide} >Закрыть</Button> 
                <Button variant='outline-success' onClick={delType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteType;
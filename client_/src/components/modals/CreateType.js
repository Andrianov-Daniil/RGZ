import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const CreateType = ({show, onHide}) => {
    return(
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-dark' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateType;
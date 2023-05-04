import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory();
    
    return(
        <Col md={4} className='col' onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card className='device'>
                <Image width={150} height={150} src={device.img} />
                <div className='mt-2 m-2 d-flex justify-content-between align-items-center'>
                    <div>
                        Samsung
                    </div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <i className='bx bx-star'></i>
                    </div>
                </div>
                <div className='m-2 mt-1'>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
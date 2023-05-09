import React, {useState} from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateHouse from "../components/modals/CreateHouse";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [houseVisible, setHouseVisible] = useState(false);

    return(
        <Container className="d-flex flex-column">
            <Button
                variant="outline-primary"
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>

            <Button
                variant="outline-primary"
                className="mt-4 p-2"
                onClick={() => setHouseVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateHouse show={houseVisible} onHide={() => setHouseVisible(false)}/>
            
        </Container>
    )
}

export default Admin;
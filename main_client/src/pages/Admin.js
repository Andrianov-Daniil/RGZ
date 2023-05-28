import React, {useState} from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateHouse from "../components/modals/CreateHouse";
import DeleteType from "../components/modals/DeleteType";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [houseVisible, setHouseVisible] = useState(false);
    const [deleteTypeVisible, setDeleteTypeVisible] = useState(false);

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
                variant="outline-danger"
                className="mt-4 p-2"
                onClick={() => setDeleteTypeVisible(true)}
            >
                Удалить тип
            </Button>

            <Button
                variant="outline-primary"
                className="mt-4 p-2"
                onClick={() => setHouseVisible(true)}
            >
                Создать объявление
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateHouse show={houseVisible} onHide={() => setHouseVisible(false)}/>
            <DeleteType show={deleteTypeVisible} onHide={() => setDeleteTypeVisible(false)} />
            
        </Container>
    )
}

export default Admin;
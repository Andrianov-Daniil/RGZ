import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Row } from "react-bootstrap";
import HouseItem from "./HouseItem";

const HouseList = observer(() => {
    const {house} = useContext(Context);
    return(
        <Row className="d-flex">
            {house.houses.map(house => 
                <HouseItem key={house.id} house={house}/>
            )}
        </Row>
    )
});

export default HouseList;

// <Row className="d-flex">
        //     {house.houses.map((house_1) => 
        //         {house.types.map((type) => {
        //             (type.id === house_1.typeId) ?
        //                 () => <HouseItem key={house_1.id} house={house_1} type={type} />
        //                 :
        //                 () =><HouseItem key={house_1.id} house={house_1} type={type} />
        //         })}
        //     )}
        // </Row>
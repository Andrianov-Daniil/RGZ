import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
    const {house} = useContext(Context);
    return(
        <ListGroup>
            {house.types.map(type =>
                <ListGroup.Item 
                style={{cursor: 'pointer'}}
                    key={type.id}
                    onClick={() => {
                        if(type.id === house.selectedType.id){
                            house.setSelectedType({});
                        }
                        else{
                            house.setSelectedType(type);
                        }
                    }}
                    active={type.id === house.selectedType.id}
                >
                    {type.name}
                </ListGroup.Item>     
            )}
        </ListGroup>
    )
})

export default TypeBar;
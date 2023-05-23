import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { ListGroup, Pagination } from "react-bootstrap";

const Pages = observer(() => {
    const {house} = useContext(Context);
    const pageCount = Math.ceil(house.totalCount / house.limit);
    const pages = [];

    for (let i = 0; i < pageCount; i++){
        pages.push(i + 1);
    }
    return(
        <Pagination className="mt-5">
            {pages.map(page => 
                <Pagination.Item
                key={page}
                active={house.page === page}
                onClick={() => house.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
})

export default Pages;
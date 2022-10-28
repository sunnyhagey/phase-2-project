import React from "react";
import MainContainer from "./MainContainer";


function ShopContainer( props ) {

    const {item} = props

    return(
        <div>
            <ul>
                <li>
                    <p>{item.name}</p>
                    <p>{`Level: ${item.level}`}</p>
                    <p>{`Price: ${item.price}`}</p>
                </li>
            </ul>
        </div>
    )
}

export default ShopContainer;
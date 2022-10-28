import React from "react";
import ShopContainer from './ShopContainer'
import GucciPage from "./GucciPage";

function MainContainer( props ) {

    return(
        console.log("placeholder")
        <div>
            <button onClick={props.petCreature} className="button">Pet</button>
            <button onClick={props.feedCreature}className="button">Feed</button>
            <button className="button" onClick={props.handleShop}>Shop</button>
            {showShop ? mapItems : null}
            <br/>
        </div>
    )
}

export default MainContainer;
import React from "react";
import ShopContainer from './ShopContainer'
import GucciPage from "./GucciPage";

function MainContainer( props ) {

    const {showShop} = props

    const mapItems = props.itemsState.map(item =>
        <ShopContainer
        item = {item}
        key = {item.id}/>)

    return(
        <div>
            <button>Feed</button>
            <button>Pet</button>
            <button>Work</button>
            <button onClick={props.handleShop}>Shop</button>
            {showShop ? mapItems : null}
            <br/>
            <p>Inventory:</p>
        </div>
    )
}

export default MainContainer;
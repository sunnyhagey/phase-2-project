import React from "react";
import ShopContainer from './ShopContainer'
import GucciPage from "./GucciPage";

function MainContainer( props ) {

    const mapItems = props.itemsState.map(item =>
        <ShopContainer
        item = {item}
        key = {item.id}/>)

        function displayShop() {
            return(
                mapItems
            )
        }

    return(
        <div>
            <button>Feed</button>
            <button>Pet</button>
            <button>Work</button>
            {mapItems}
        </div>
    )
}

export default MainContainer;
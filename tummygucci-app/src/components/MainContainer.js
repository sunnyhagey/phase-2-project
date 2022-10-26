import React from "react";
import ShopContainer from './ShopContainer'
import GucciPage from "./GucciPage";
import Inventory from "./Inventory";

function MainContainer( props ) {

    const {showShop} = props
    const {inventory} = props

    const mapItems = props.itemsState.map(item =>
        <ShopContainer
        item = {item}
        key = {item.id}/>)

    return(
        <div>
            <button className="button">Pet</button>
            <button className="button">Work</button>
            <button className="button" onClick={props.handleShop}>Shop</button>
            {showShop ? mapItems : null}
            <br/>
            <Inventory
            inventory = {inventory}/>
        </div>
    )
}

export default MainContainer;
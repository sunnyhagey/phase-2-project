import React, {useState, useEffect} from 'react';
import MainContainer from './MainContainer';

const baseUrl = "http://localhost:3000/"
const itemsUrl = baseUrl + "items/"

function GucciPage() {

    //set state for shop
    const [showShop, setShowShop] = useState(false)

    //toggle true and false on click
    const handleShop = (e) => {
        setShowShop((showShop) => (!showShop))
    }

    const [itemsState, setItemsState] = useState([])
    useEffect(() => fetchItems(), [])

    function fetchItems() {
        fetch(itemsUrl)
        .then(resp => resp.json())
        .then(items => setItemsState(items))
    }


    return(
        <div>
            <MainContainer
            itemsState = {itemsState}
            handleShop = {handleShop}
            showShop = {showShop}/>
        </div>
    )
}

export default GucciPage;
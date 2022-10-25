import React, {useState, useEffect} from 'react';
import MainContainer from './MainContainer';

const baseUrl = "http://localhost:3000/"
const itemsUrl = baseUrl + "items/"

function GucciPage() {

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
            itemsState = {itemsState}/>
        </div>
    )
}

export default GucciPage;
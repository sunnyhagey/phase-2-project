import React, {useState, useEffect, useTimer} from 'react';
import MainContainer from './MainContainer';
import CreatureContainer from './CreatureContainer';

const baseUrl = "http://localhost:3000/"
const itemsUrl = baseUrl + "items/"


function GucciPage() {

    const [inventory, setInventory] = useState([])

    //*** SHOP START ***
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
    //*** SHOP STOP ***

    //*** MOOD STATE START ***/
    const [moodState, setmoodState] = useState([])
    
    function fetchItems() {
        fetch(itemsUrl)
        .then(resp => resp.json())
        .then(moods => setmoodState(moods))
    }
    //***MOOD STATE STOP ***/

    //*** TIMER START ***/
    // const { time, start, pause, reset, status } = useTimer();
   
// <div>
//     <button onClick={start}>Start</button>
//     <button onClick={reset}>Reset</button>
// </div>
//     <p>Elapsed time: {time}</p>
//     {status === 'RUNNING' && <p>Running...</p>}

 //*** TIMER STOP */

    return(
    
        <div>
            <MainContainer
            itemsState = {itemsState}
            handleShop = {handleShop}
            showShop = {showShop}
            inventory = {inventory}/>
            <CreatureContainer 
            moodState = {moodState}
            />
        </div>
            
        

    )
    
}

export default GucciPage;
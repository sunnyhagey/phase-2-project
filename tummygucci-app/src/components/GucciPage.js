import React, {useState, useEffect} from 'react';
import { useTimer } from 'use-timer';
import MainContainer from './MainContainer';
import CreatureContainer from './CreatureContainer';
import Hatch from './Hatch';

const baseUrl = "http://localhost:3000/"
const itemsUrl = baseUrl + "items/"

// set all pet's variables in state (happiness, money, hunger, inventory). Stats will be updated through PATCH requests


// make a ROUTE in db.json and save baseline pet (DefaultPets) as its own route, then pull from default route and use initial stats in state and save that pets stats as the default state in the baseline route. 

//** INVENTORY MANAGEMENT START */
// Create an empty array for your baseline inventory
// Write a function to add items to database
// Write a pull function that selects inventory array items and renders it to the page's inventory container
// PATCH request to add/remove items
//** INVENTORY MANAGEMENT STOP */

//*** CREATE PETS START **
// store default values for pet (base happiness + health = 10)
// create two pets, so when one dies you have the other one available and that one can be modified
//*** CREATE PETS STOP ***

// Conditional, every time timer number is divisible by 60, subtract 1 from hp and happiness
// The child component that has the bars in it renders grey/red bars based on the timer value
// use a map, filter, or forLoop that tracks happiness level and render bars


function GucciPage() {

    //* HATCH START */
    const [showHatch, setShowHatch] = useState(true)
    const handleHatch = (e) => {
        setShowHatch((showHatch) => (!showHatch))
    }
    //* HATCH STOP */

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
    const { time, start, pause, reset, status } = useTimer();
    //*** TIMER STOP */

    //*** SET NAME START */
    function addName(event, newName){
        event.preventDefault()

        let postRequest = {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(newName)
          }
       
          fetch(itemsUrl, postRequest)
          .then( r => r.json())
          .then(console.log)
        //   .then(newNameData => setName([newNameData ]) )
       
    }
      
    //*** SET NAME STOP */

    return(
<div>
    <div>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
    </div>
    <p>Elapsed time: {time}</p>
    {status === 'RUNNING' && <p>Running...</p>}

    
    <div>
        <div>

            <MainContainer
            itemsState = {itemsState}
            handleShop = {handleShop}
            showShop = {showShop}/>
            <CreatureContainer 
            moodState = {moodState}
            />
        </div>
    </div>
</div>
        

    )
    
}

export default GucciPage;
// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import GucciPage from './components/GucciPage';
import Hatch from './components/Hatch';

function App() {
let [name, setAddName] = useState('')

function addName (event, newName) {
  event.preventDefault()

  const baseUrl = "http://localhost:3000/"
  const itemsUrl = baseUrl + "items/"
  
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
  .then(newName => setAddName([newName]) )
  }

  return (
    <div className="">
      <header>
        <h1>{addName}</h1>
      </header>
      <Hatch 
      name = {name}
      addName = {addName}
      />
      <GucciPage />
    </div>
  );
}

export default App;

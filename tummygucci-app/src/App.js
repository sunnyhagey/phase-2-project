// npm install && json-server -p 3001 --watch db.json && npm start

// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import GucciPage from './components/GucciPage';
import Hatch from './components/Hatch';

function App() {
  let [name, setName] = useState('')
  let [showHatch, setShowHatch] = useState(true)

  function addName (event, newName) {
    event.preventDefault()

    const baseUrl = "http://localhost:3001/"
    const namesUrl = baseUrl + "creatureName/"

    let postRequest = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "name":newName
      })
    }
    fetch(namesUrl, postRequest)
    .then( r => r.json())
    .then( response => {
      setName(newName)
      setShowHatch(false)
    })
  }

  return (
    <div className="">
      <header>
        <h1>{name}</h1>
      </header>
      {showHatch && <Hatch 
          name = {name}
          addName = {addName}
        />
      }
      {!showHatch && <GucciPage />}
    </div>
  );
}

export default App;

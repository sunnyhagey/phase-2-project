import React, {useState} from "react";

export default function Hatch(props){
    const [name, setName] = useState("")
    
    return(
    <div className="main-content">
        <div className="hatchContainer">
            <div className="form">
                <form onSubmit={(event) => props.addName (event, name)}>
                    <input onChange={(e) => setName(e.target.value)} id="nameField" type="text" value={name} placeholder="INSERT NAME HERE" />
                    <div>
                        <img src="images/Egg.gif" />
                    </div>
                    <button type="submit" id="hatchBtn" className="button" >HATCH ME!</button>
                </form>
                
            </div>
         
            
        </div>
        </div>
    )
}
import React, {useState, useEffect} from "react";
export default function CreatureContainer(props){
    const baseUrl = "http://localhost:3001/"
    const thoughtUrl = baseUrl + "thoughtBubbles/"
    const moodUrl = baseUrl + "mood/"
    const hungerUrl = baseUrl + "hunger/"
    //Setter for showing the thought bubble container based on mood/hunger. 
    const [showBubble, setShowBubble] = useState(false)
    const handleShowBubble = event => {
        //ShowBubble Container on event (<4 Bars)
        setShowBubble(true)
    }
    //Setter for showing the creature images based on mood/hunger
    const [creatureImage, setCreatureImage] = useState("./images/Happy.gif")
    //Setter for showing the thought bubble images based on mood/hunger
    // const [creatureImage, setCreatureImage] = useState("./images/Happy.gif")
    //update creature image whenever the mood changes
    useEffect(() => {
        console.log("moodState", props.moodState)
        getMoodImage(props.moodState)
        .then((image) => {
            console.log("first then", image)
            setCreatureImage(image)
        })
        .then((image) => {
            console.log("second then", image)
        })
        
    }, [props.moodState])
    

    //Bubble should be hidden on hunger/mood 5+
    //SHOW BUBBLE FUNCTION START***//
    function bubbleStatus(){
        return(
            <img src="images\TB_Hungry.gif"/>
        )
    }
    //SHOW BUBBLE FUNCTION STOP***//
    //**CHARACTER SWAP FUNCTION START**
    //if mood <4 show ./images/Angry.gif
    //if mood 5-7 show ./images/neutral.gif
    //if mood 7+ show ./images/happy.gif
    function getMoodImage(moodNumber){
        // const promise = new Promise((resolve, reject) => {
            //resolve('Success!');
         
        return fetch(moodUrl)
        .then((response) => response.json())
        .then((moodData) => {
            let currentMood = moodData.find( mood => mood.value == moodNumber )
            console.log("currentMood.image", currentMood.image)
            return currentMood.image            
        })
    }
    function character(mood){
        //get the mood that correlates to the mood variable
        return(
            //replace with a GET request that searches the DB for the current mood and returns the correct image
            <img src={creatureImage}/>
        )
    }
    //**CHARACTER SWAP FUNCTION STOP**
    return (
    <div className="main-content"> 
        <div className="sidebar">
            <button onClick={props.feedCreature}>Feed</button>
            <button onClick={props.petCreature}>Pet</button>
            <div className="inventory">
                <strong>INVENTORY:</strong><br/>
                <p>(coming soon)</p>
            </div>
        </div>
        <div>
            <div className="thoughtBubble">
            {bubbleStatus()}
            </div>
            <div className="statusBar">
                <div className="status-icon">
                    <img src="images\Happyness.png"/>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <img src="images\Burger.png"/>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                    <div className="barFilled">
                    </div>
                </div>
            </div>
            <div className="creature">
            {character(props.moodState)}
            </div>
        </div>
    </div>
    )
}
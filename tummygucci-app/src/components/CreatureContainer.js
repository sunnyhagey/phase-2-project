import React, {useState} from "react";

export default function CreatureContainer(props){

    //Setter for showing the thought bubble container based on mood/hunger. Bubble should be hidden on hunger/mood 5+
    const [showBubble, setShowBubble] = useState(false)

    //Setter for showing the creature images based on mood/hunger
    const [showCreature, setShowCreature] = useState(true)


    //SHOW BUBBLE FUNCTION START***//
    function bubbleStatus (){

    }
    //SHOW BUBBLE FUNCTION STOP***//

    //**CHARACTER SWAP FUNCTION START**
    //if mood <4 show ./images/Angry.gif
    //if mood 5-7 show ./images/neutral.gif
    //if mood 5-7 show ./images/happy.gif
    function charStatus (){

    }
    //**CHARACTER SWAP FUNCTION STOP**


    return (
    <div>
        <div className="thoughtBubble">
        {showBubble}
        </div>
        <div className="creature">
        {showCreature}
        </div>
    </div>
    )

}
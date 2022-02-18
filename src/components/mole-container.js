import {  useState } from "react";
import { Mole } from "./mole";
import { EmptySlot } from './empty-slot'

function MoleContainer(props){
    let [displayMole, setDisplayMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    let showMole = displayMole ? <Mole setScore={props.setScore} handleClick={handleClick} setDisplayMole={setDisplayMole} /> : <EmptySlot setDisplayMole={setDisplayMole} />
    return (
        <div className="moleContainer">
            {showMole}
        </div>
    )
}

export default MoleContainer
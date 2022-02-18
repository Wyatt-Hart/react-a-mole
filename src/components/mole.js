import { useEffect } from 'react'
let moleImg = '../images/mole.png'

export function Mole(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img src={moleImg} alt="Mole"onClick={props.handleClick}/>
        </div>
    )
}
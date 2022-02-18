import { useEffect } from 'react'
let moleHill = '../images/molehill.png'

export function EmptySlot(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img src={moleHill} alt="Empty Hill" />
        </div>
    )
}
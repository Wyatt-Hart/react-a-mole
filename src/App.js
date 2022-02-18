import React, { useState } from 'react'
import MoleContainer from './components/mole-container';

function App() {
  let [ score, setScore ] = useState(0)

  const handleClick = () => {
    this.setDisplayMole = false
    setScore(score+1)
  }
  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++){
      hills.push(
        <MoleContainer key={i} setScore={setScore} score={score} props={handleClick}/>
      )
    }
    
    return (
      <div>
        {hills}
      </div>
    )
  }
  return (
    <div className="App" style={{textAlign: 'center'}}>
      <h1>React-a-Mole!</h1>
      <h2>Score: {score}</h2>
      {createMoleHill()}
    </div>
  );
}

export default App;

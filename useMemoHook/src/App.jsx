// MemoHook returns a memoized value.means the  doesn't need to be recalculated
//it only run when dependency get updated

import React, { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num){
    console.log('Calculation Done!');
    return Math.pow(num, 3)
  }

  const result = useMemo(()=> cubeNum(number), [number])


  return (
    <>
    <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
    <h1>Cube of the number: {result}</h1>
    <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
    <h1>Counter: {counter}</h1>
    </>
  )
}

export default App

//useRefHook allow us to create mutable variables, which will not re-render the component
// also used for accessing DOM elemennt

import React, { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  //accesseing DOM element
  const inputElement = useRef();
  const btnClicked = ()=>{
    console.log(inputElement.current)
    inputElement.current.style.background = 'blue'
  }

  // const [value, setValue] = useState(0)
  // const count = useRef(0);

  // useEffect(()=>{
  //   count.current = count.current + 1;
  // });
  


  return (
    <>
    {/* <button onClick={()=>{setValue(prev => prev-1)}}>-1</button>
    <h1>{value}</h1>
    <button onClick={()=>{setValue(prev => prev+1)}}>+1</button>
    <h1>Render Count: {count.current}</h1> */}

    <input type="text" ref={inputElement} />
    <button onClick={btnClicked}>Click Here</button>
    </>
  )
}

export default App

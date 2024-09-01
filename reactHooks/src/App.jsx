// useState hook to change state and UI of app
import React from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const[car, setCar] = useState({
    brand: 'BMW',
    model: 'M4',
    year: '2020',
    color: 'Red'
  });

  const changeColor = ()=>{
    setCar({...car, color: 'Blue'})
  }
  // const [color, setColor] = useState('red');


  // const changeColor =()=>{
  //   setColor('Blue')
  // }
  return (
    <>
      {/* <h1>My Favbourite color is {color}!</h1>
      <button onClick={changeColor}>Blue</button> */}

      <h1>MY {car.brand}</h1>
      <h2>It is {car.color} {car.model} from {car.year}</h2>
      <button onClick={changeColor}>Click</button>
    </>
  )
}

export default App

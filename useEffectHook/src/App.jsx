import React, { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  //cb=callback, d=depandency should initialize in array
  // useEffect(cb,d[])
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  // useEffect without any dependency
  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1)  //increase the after two second using timeout function
    }, 1000)
  })

  // useEffect with dependency
  useEffect(() => {
    setTimeout(() => {
      setCount1(count1 => count1 + 1)
    }, 1000)
  },[])

  return (
    <>
      <h1>I have rendered {count} times!</h1>
      <h2>I have again rendered {count1} times!</h2>
    </>
  )
}

export default App

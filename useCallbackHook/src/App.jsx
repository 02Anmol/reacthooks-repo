// this lets u cache a function definition b/w re-renders

import React, { useCallback, useState } from 'react'
import './App.css'
import Header from './Components/Header';

function App() {

  const [count, setCount] = useState(0);

  const newFn = useCallback(() => { }, []) // not create another fn but use the cache fn when fn is same and prop is same.

  // const newFn = useCallback((count) => { }, [count]) // re-rendering happen because prop changes and new fn made cause of count 

  return (
    <>
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Click Here</button>
    </>
  )
}

export default App

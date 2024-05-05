import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);   // counter is a variable,
  // setCounter is a fumction which is responsible to update this variable.

  function addValue() {       // or we can use arrow function, const addValue = () => {}.
    // counter = counter + 1;
    // setCounter(counter);    // or setCounter(counter +1)
    // console.log("Clicked", counter)
    if (counter == 20) {
      setCounter(counter);
    }else{
      setCounter(counter+1);
    }
  }

  const removeValue = () => {
    if (counter == 0){
      setCounter(counter);
    }else{
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Welcome to ReactJS !!</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease Value : {counter}</button>
    </>
  )
}

export default App

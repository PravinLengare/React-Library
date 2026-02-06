import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  
  // const addValue = () => {
  //   console.log(counter);
  //   console.log(Math.random());
  //   counter++
    
  // }
  const addValue = ()=>{
    if(counter >= 20){
      return
    }
    console.log(counter);
    counter++
    setCounter(counter)
  }

  const removeValue = ()=>{
    if(counter <= 0){
      return
    }
    
    console.log(counter);
     counter--
     setCounter(counter)
    
    
  }

  //let counter = 12
  return (
    <>
     <h2>Chai aur react</h2>
     <h2>counter value : {counter}</h2>
     <button
     onClick={addValue}>add value {counter}</button>
      <br />
     <button
     onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App

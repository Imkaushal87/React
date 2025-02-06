import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  //let counter = 15
  const addvalue =()=>{
    //console.log("clicked",counter);
    // eslint-disable-next-line no-const-assign
    counter = counter +1;
    setCounter((prevcounter)=>(prevcounter <25 ?prevcounter+1:prevcounter));
  }

  const removeValue =()=>{
    setCounter((prevcounter)=>(prevcounter>0 ?prevcounter-1:prevcounter))
  }

  return (

    <>
     <h1>Kuvar and React</h1>
     <h2>Counter value:{counter}</h2>
     <button
     onClick={addvalue}>Add value</button>
     <br />
     <button
     onClick={removeValue}>remove value{counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App

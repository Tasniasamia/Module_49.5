import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Add } from './Function/Function'
import Component from './Component/Component'

function App() {
const [step,setStep]=useState([])
useEffect(()=>{
  fetch('data.json')
  .then(res=>res.json())
  .then(data=>setStep(data))
},[])
  return (
    <div className="App">
   {
    step.map(index=><Component {...index} key={index._id}></Component>)
   }
      
    </div>
  )
}

export default App

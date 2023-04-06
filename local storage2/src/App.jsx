import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './Component/component';

function App() {
const [step,setStep]=useState([]);
useEffect(()=>{
const load=()=>{
  fetch('data.json')
  .then(res=>res.json())
  .then(data=>setStep(data))
}
load();
    },[])
console.log(step);
  return (
    <div className="App container">
      {
      step.map((index)=><Component {...index} key={index._id}></Component>)
      }
    </div>
  )
}

export default App

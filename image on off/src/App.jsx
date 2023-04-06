import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pic1 from './images/off.png'
import pic2 from './images/on.png'
function App() {
const [step,setStep]=useState(pic1)
const on=()=>{setStep(pic2)}
const off=()=>{setStep(pic1)}
  return (
    <div className="App">
     <img src={step}style={{height:"300px",width:"200px"}}/>
     <button onClick={on}>Light On</button>
     <button onClick={off}>Light off</button>
    </div>
  )
}

export default App

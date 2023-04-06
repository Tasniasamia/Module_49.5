import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [step,setStep]=useState({
  name:"Tasnia Sharin",
  Age:19,
  Dept:"Computer",
  Profession:"Software Engineer",
  src:"../../images/samia.jpg"})
const change=()=>{
  setStep({
  name:"Amar Upadhay",
  Age:49,
  Dept:"Chemical",
  Profession:"Acting",
  src:"../../images/amer goru.jpg"})
}
const change2=()=>{

  setStep({
    name:"Tasnia Sharin",
    Age:19,
    Dept:"Computer",
    Profession:"Software Engineer",
    src:"../../images/samia.jpg"})
}
  return (
    <div className="App">
     
      <p>Name:{step.name}</p>
      <p>Age: {step.Age}</p>
      <p>Department: {step.Dept}</p>
      <p>Profession: {step.Profession}</p>
      <img src={step.src}/>
      <button onClick={change}>Hero</button>
      <button onClick={change2}>FAN</button>

    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componet from './Component/componet'

function App() {
const myobj={
  name:"Tasnia Sharin",
  Age:19,
  Dept:"Computer",
  Profession:"Software Engineer",
  src:"../../images/samia.jpg"

}
const [step,setStep]=useState(myobj)
  return (
    <div className="App">
     
     <Componet {...step}></Componet>
    </div>
  )
}

export default App

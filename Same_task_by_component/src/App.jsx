import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { myobject } from './event/myobj'
import Normal from './Component/normal'
function App() {
  const [step,setStep]=useState(myobject)
console.log(step);
  return (
    <div className="App">
      <div>
      
      <Normal myobject={step}></Normal>



      </div>
    </div>
  )
}

export default App

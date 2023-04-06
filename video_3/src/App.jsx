import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { myobj1 } from './objectdata/myobj'

function App() {
 const [step,setStep]=useState(myobj1);

  const removeAll=()=>{
    setStep([]);
  }

const remove=(id)=>{
  const removeData=step.filter(index=>index._id!=id);
  setStep(removeData);
}
  return (
<div>
      {
 step.map(index=><div key={index._id}>
  <p>Name:{index._id}</p>
  <button onClick={()=>remove(index._id)}className='bg-red-100 p-5 mb-2'>remove</button>
 </div>)
     
      }
      <button onClick={removeAll} className='bg-red-100 p-5'>Remove All</button>
      </div> 
        
      
  
  )

}
export default App

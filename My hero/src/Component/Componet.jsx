import React, { useState } from 'react';

const Componet = (props) => {
    const [step1,setStep1]=useState(props)
    const change=()=>{

            
   setStep1({
    name:"Amar Upadhay",
    Age:49,
    Dept:"Chemical",
    Profession:"Acting",
    src:"../../../images/amer goru.jpg"
}
);
     
    }
    return (
        <div>
            <p>Name: {step1.name}</p>
            <p>Age: {step1.Age}</p>
            <p>Dept: {step1.Dept}</p>
            <p>Profession: {step1.Profession}</p>
            <img src={step1.src}/>
            <button onClick={change}>Please Change</button>
        </div>
    );
};

export default Componet;
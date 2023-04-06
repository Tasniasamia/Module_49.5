import React, { useState } from 'react';
import './Component.css'
const Component = (props) => {
    console.log(props);
    const {_id,balance,guid,age}=props
    const [step1,setStep1]=useState(0);
    const additem=(id)=>{
        console.log(id);
        const item=localStorage.getItem(id)
        if(item){
            localStorage.setItem(id,parseInt(item)+1)
        }
        else{
            localStorage.setItem(id,1)
        }

    }
    return (
        <div style={{backgroundColor:"pink",padding:"20px"}}>
            
            <p>{_id}</p>
            <p>{guid}</p>
            <p>{age}</p>
            <p>{balance}</p>
            <button onClick={()=>additem(_id)}>Add to cart</button>
        </div>
    );
};

export default Component;
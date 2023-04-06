import React, { useState } from 'react';
import './normal.css'
const Normal = (props) => {
const [step1,myStep1]=useState(props.myobject);
const RemoveAll=()=>{
    myStep1([]);
}
const remove=(id)=>{
    const removedata=step1.filter(index=>index._id!=id);
    myStep1(removedata);
}
console.log(step1);
    return (
        <div>
        {
            step1.map(index=><div key={index._id}>
                <p>Name{index._id}</p>
                <button onClick={()=>remove(index._id)}>Remove</button>
            </div>)
        }
        <button onClick={RemoveAll}>RemoveAll</button>
        </div>
    )
    
};

export default Normal;
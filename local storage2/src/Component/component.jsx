import React, { useState } from 'react';
import './component.css'
const Component = (props) => {
console.log(props);
const {_id,index,balance,picture,guid,age}=props;
const [step1,setStep1]=useState(props)
console.log(step1);
const searchid=(id)=>{

//     console.log("Item",id);
//     let quantity=localStorage.getItem(id);
//     if(localStorage.getItem(id)){
// quantity=parseInt(quantity)+1;
// localStorage.setItem(id,quantity)
//     }
//     else{
//         localStorage.setItem(id,1);

//     }
    let shortobj={};
    let obj=localStorage.getItem("Shopping_cart")
   
    if(obj){
       shortobj=JSON.parse(obj);
    }
    else{
        localStorage.setItem("Shopping_cart",JSON.stringify(shortobj));

    }
    let quantity=shortobj[id];
    if(quantity){
        let newquantity=parseInt(quantity)+1;
        shortobj[id]=newquantity;
    }
    else{
        shortobj[id]=1;
    }
    localStorage.setItem("Shopping_cart",JSON.stringify(shortobj));

}
    return (
        <div className='contaner'>
            <p>User ID: {index}</p>
            <p>{_id}</p>
            <img src={picture}/>
            <p>guid: {guid}</p>
            <p>age: {age}</p>
          <button onClick={()=>searchid(_id)}>Add to Cart</button>
        </div>
    );
};

export default Component;
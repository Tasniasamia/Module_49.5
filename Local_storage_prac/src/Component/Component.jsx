import React from 'react';
import { Addlocal } from '../Function/Function';

const Component = (props) => {
    console.log(props);
    const {_id,age,balance,index,guid}=props
    return (
        <div style={{backgroundColor:"pink",border:"1px solid black",marginBottom:"10px",padding:"5px"}}>
            <p>User Id:{_id}</p>
            <p>Age : {age}</p>
            <p>Balance: {balance}</p>
            <p>index: {index}</p>
            <p>guid: {guid}</p>
            <button onClick={()=>Addlocal(_id)}>Add to Cart</button><br />
            <button style={{marginTop:"5px"}}>Remove</button>
        </div>
    );
};

export default Component;
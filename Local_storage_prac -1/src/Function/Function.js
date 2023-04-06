const Add=(first,second)=>{
const total=first+second;
return total;
}

const Addlocal=(id)=>{

    console.log(typeof id);
    let shortobj={};
let storeitem=localStorage.getItem("Shopping_cart")
if(storeitem){
shortobj=JSON.parse(storeitem);
}
else{
    localStorage.setItem("Shopping_cart",shortobj);
}
    
let quantity=parseInt(shortobj[id]);
if(quantity){
    
    shortobj[id]=parseInt(quantity)+1;
}
else{
    shortobj[id]=1;
}
localStorage.setItem("Shopping_cart",JSON.stringify(shortobj))
}



const removeitem=(id)=>{

    console.log(typeof id);
    let shortobj={};
let storeitem=localStorage.getItem("Shopping_cart")
if(storeitem){
shortobj=JSON.parse(storeitem);
}
else{
    localStorage.setItem("Shopping_cart",shortobj);
}
    

if(id in shortobj){
    delete shortobj[id];
}

localStorage.setItem("Shopping_cart",JSON.stringify(shortobj))
}


const alllocalremove=()=>{
    if(localStorage.getItem("Shopping_cart")){
        localStorage.removeItem("Shopping_cart");
    }
}

export {Add,Addlocal,removeitem,alllocalremove}
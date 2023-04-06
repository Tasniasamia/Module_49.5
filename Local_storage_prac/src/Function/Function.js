const Add=(first,second)=>{
const total=first+second;
return total;
}

const Addlocal=(id)=>{
    let quantiy=localStorage.getItem(id);

    if(quantiy){
        let newquantity=parseInt(quantiy)+1;
        localStorage.setItem(id,newquantity);
    }
    else{
        localStorage.setItem(id,1);
    }
}
export {Add,Addlocal}
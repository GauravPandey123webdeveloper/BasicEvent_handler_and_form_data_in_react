import { sculptureList } from "./data";
import React,{useState} from "react";
export default function Welcome() {
    const [index,setIndex]=useState(0);
    const[show,setShow]=useState(false);
    let sculpture=sculptureList[index];
    let check=index<sculptureList.length-1;
    function updateIndex(){
        if(check){
            setIndex(index+1);
        }else{
            setIndex(0);
        }
    }
    function handleShow(){
        setShow(!show);
    }
  return (
   <>
      <button onClick={updateIndex}>next</button>
      <h1>{sculpture.name}</h1>
      <h2>({index+1} of {sculptureList.length})</h2>
      <button onClick={handleShow}>{show?'Hide':'Show'} details</button>
      <p>{show?sculpture.description:""}</p>
      <img src={sculpture.url} alt={sculpture.alt} />
   </>

  )
}

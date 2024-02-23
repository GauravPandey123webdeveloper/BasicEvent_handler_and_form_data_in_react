import React, { useState } from 'react'

export default function DataSubmit() {
    const[to,setTo]=useState('Pradeep');
    const[data,setData]=useState('hello');
    function handleSubmit(e){
        alert(data+" "+to);
    }
  return (
   <>
   <form onSubmit={handleSubmit}>
    <label htmlFor="names">To:</label>
    <select value={to} onChange={(e)=>setTo(e.target.value)}>
        <option value="pradeep" id='names' >Pradeep</option>
        <option value="pradeep giri" >Pradeep giri</option>
    </select>
    <br />
    <textarea placeholder='write ur message' value={data} onChange={(e)=>setData(e.target.value)}></textarea>
    <br />
     <button>send</button>
   </form>
   </>
  )
}

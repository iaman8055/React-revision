import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Controls = () => {
    const [number,setNumber]=useState(0);
    const [number1,setNumber1]=useState(0);

    const dispatch=useDispatch();
    const handleIncrement=()=>{
        dispatch({type:'INCREMENT'})
    }
    const handleDecrement=()=>{
        dispatch({type:'DECREMENT'})
    }
    const handleSub=()=>{
        dispatch({type:'SUBSTRACTION',payload:{number}})
    }
    const handleAdd=()=>{
        dispatch({type:'ADDITION',payload:{number}})
    }
    
  return (
    <div>
    <button type="button" class="btn btn-secondary" onClick={handleDecrement}>-1</button>
    <button type="button" class="btn btn-primary" onClick={handleIncrement}>+1</button>
    <input type='text' value={number} onChange={e=>setNumber(e.target.value)} placeholder='addition'/>
    <button  class="btn btn-primary" onClick={handleAdd}>add</button>
    <button  class="btn btn-secondary" onClick={handleSub}>subtract</button>
    </div>
  )
}

export default Controls
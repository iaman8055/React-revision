import React from 'react'
import Items from './Items'


const FoodItems = ({items}) => {
    const handleBuyButton=(e)=>{
        
    }
  return (
    <ul className='list-group'>
        {items.map((item)=>(
            <Items key={item} foodItem={item} handleBuyButton={()=>console.log(`${item} bought`)}/>
        ))}
    </ul>
  )
}

export default FoodItems
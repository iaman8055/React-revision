import React from 'react'

const FoodInput = ({handleKeyDown}) => {
   
  return (
    <div>
        <input type='text'
         placeholder='enter food items'
         onKeyDown={handleKeyDown}
        />
    </div>
  )
}

export default FoodInput
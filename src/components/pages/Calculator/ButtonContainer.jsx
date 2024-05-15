import React, { useState } from 'react'
import styles from './ButtonContainer.module.css'
const ButtonContainer = ({handleOnClick}) => {
  
  const buttonNames=['1','2','3','4','5','6','7','8','9','0','+','-','/','.','C','*','=']
  
  return (
    <div className={styles.buttonsContainer}>
        {buttonNames.map((button)=>(
            <button key={button} 
            className={styles.button}
            onClick={()=>handleOnClick(button)}
            >{button}</button>
        ))}
    </div>
  )
}

export default ButtonContainer
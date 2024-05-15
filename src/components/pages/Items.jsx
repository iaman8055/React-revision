import React from 'react'
import styles from './Items.module.css'
const Items = ({foodItem,handleBuyButton}) => {
  return (
    <>
    
      <li className={`${styles["kg-item"]} list-group-item `}
>
        <span className={styles["kg-span"]}>{foodItem}</span>
      </li>
        <button className={styles.button} onClick={handleBuyButton}>Buy</button>

    
    </>
  )
}

export default Items
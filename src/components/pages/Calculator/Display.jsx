import { useState } from "react";
import styles from "./display.module.css";

const Display = ({display}) => {
  return <input className={styles.display} type="text"
  value={display}/>
};

export default Display;
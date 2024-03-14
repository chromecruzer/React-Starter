//import React from 'react'
import styles from './Button.module.css'

 const Button = () => {

  // inline css styling

  const styleInline = {
    backgroundColor: "hsl(209, 91%, 9%)",
    color: "azure",
    padding: "20px 10px",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer"
  }
  return (
    <div>

      <button className={styles.Btn}>CLICK ME MFS</button>
      <button style={styleInline}>CLICK ME3- MFS</button>

    </div>
  )
}

export default Button
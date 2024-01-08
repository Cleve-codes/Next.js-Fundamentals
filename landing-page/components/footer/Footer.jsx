import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        Cleve-Codes
      </div>
      <div className={styles.text}>
        CleveCodes Creative Agency &copy; 2024
      </div>
    </div>
  )
}

export default Footer
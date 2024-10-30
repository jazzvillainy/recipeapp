import React from 'react'
import styles from "./innerContainer.module.css"

function InnerContainer({children}) {
  return (
    <div className={styles.InnerContainer}>{children}</div>
  )
}

export default InnerContainer
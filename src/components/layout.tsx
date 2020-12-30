import React, { ReactNode } from "react";
import { Link } from "gatsby";
import styles from "./layout.module.css"
type LayoutProps = {
  children: ReactNode
}

export default ({ children }: LayoutProps) => {
  return (
    <div>
    <div className={styles.header} >
      <div><h1 >First Gatsby Website</h1>
      </div>
      
      <div className={styles.nav}>
        <Link className={styles.item} to="/">Home</Link>
        <Link className={styles.item} to="/contact">Contact</Link>
        <Link className={styles.item} to="/about">About</Link>
        <Link className={styles.item} to="/project">Projects</Link>

      </div>
      </div>
      {children}
    </div>
  )
}

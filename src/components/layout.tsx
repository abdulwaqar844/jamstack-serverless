import React, { ReactNode } from "react";
import { Link } from "gatsby";
import styles from "./layout.module.css"
type LayoutProps = {
  children: ReactNode
}

export default ({ children }: LayoutProps) => {
  return (
    <div style={{  textAlign: "center", }} >
      <h1 >First Gatsby Website</h1>
      <div className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <br/>
        <Link to="/app">Page</Link>

      </div>

      {children}
      <div       >
        Website Developed by Abdul Waqar</div>
    </div>
  )
}

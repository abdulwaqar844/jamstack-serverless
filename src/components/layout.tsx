import React, { ReactNode } from "react";
import { Link } from "gatsby";

type LayoutProps = {
  children: ReactNode
}

export default ({ children }: LayoutProps) => {
  return (
    <div style={{  textAlign: "center", }} >
      <h1 >First Gatsby Website</h1>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>

      </div>

      {children}
    </div>
  )
}

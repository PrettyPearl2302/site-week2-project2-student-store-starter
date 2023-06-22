import * as React from "react"
import "./Navbar.css"
// import { Link } from "react-router-dom"
import Logo from "../Logo/logo"


export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <p>Navbar</p>
    </nav>
  )
}

import React from "react"
import { Link } from "react-router-dom"
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"
import Logo from "../Logo/Logo"
import "./Navbar.css"

export default function Navbar() {
	return (
		<nav className="nav-container">
			<Logo />
			<div className="nav-socials">
					<a>
						<FaTwitter />
					</a>
					<a>
						<FaInstagram />
					</a>
					<a>
						<FaFacebook />
					</a>
			</div>

			<div className="nav-links">
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/about" className="nav-link">
					About
				</Link>
				<Link to="/contact" className="nav-link">
					Contact
				</Link>
				<Link to="/contact" className="nav-link">
					Buy now
				</Link>
			</div> 
		</nav>
	)
}

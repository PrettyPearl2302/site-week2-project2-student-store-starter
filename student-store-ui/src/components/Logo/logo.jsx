import { Link } from "react-router-dom"
import "./Logo.css"

export default function Logo() {
    return (
        <Link to="/">
            <div className="code-path-logo">
				<img src="/codepath-logo.png" alt="main-page-logo" />
            </div>
        </Link>
    )
}
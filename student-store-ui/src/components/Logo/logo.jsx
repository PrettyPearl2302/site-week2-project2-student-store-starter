import { Link } from "react-router-dom"
import "./Logo.css"

export default function Logo() {
    return (
        <Link to="/">
            <div className="codepath-logo">
				<img src="/codepath-logo.png" alt="main-page-logo" />
            </div>
        </Link>
    )
}
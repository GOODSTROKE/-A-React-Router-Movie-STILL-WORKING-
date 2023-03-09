import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signups">Signups</Link>
        </div>
    )
}
export default NavBar
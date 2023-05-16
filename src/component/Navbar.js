import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav className="navbar">
        <h2>TodoApp...</h2>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/form">add New</Link>

            {/* <a href="#">Home</a>
            
            <a href="#"> AddNew</a> */}
        </div>
    </nav>
    )
}

export default Navbar;
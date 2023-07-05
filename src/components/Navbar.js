import { Outlet, Link } from "react-router-dom";
import { checkLogin, logOut } from "../action/auth";

export default function Navbar() {
    const handleClick = () => {
        logOut();
        alert('Logout Success')
        window.location.href='/login'
    }
    checkLogin ()
    return (
        <>
            <link rel="stylesheet" href="/bootstrap/css/bootstrap.css" />
            <link rel="stylesheet" href="/css/Navbar.css" />
            <script src="/bootstrap/js/bootstrap.js"></script>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <   li class="nav-item active">
                            <Link to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/users">List User</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/gamelist">Game List</Link>
                        </li>
                    </ul>
                </div>
                <div class="collapse navbar-collapse" id="logout-btn">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link onClick={handleClick}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

import { NavLink } from "react-router";

function Header() {
    return (
        <header className="site-header">
            <h1 className="logo">My Universe</h1>

            <nav className="nav-menu">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/todo">Todo</NavLink>
                <NavLink to="/coin">Coin</NavLink>
                <NavLink to="/movie">Movie</NavLink>
                <NavLink to="/product">Product</NavLink>
                <NavLink to="/book">Book</NavLink>
                <NavLink to="/board">Board</NavLink>
            </nav>

            <button className="thene-button" type="button">
                다크
            </button>
        </header>
    );
}

export default Header;

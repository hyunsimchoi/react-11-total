import { NavLink } from "react-router";

function Header() {
    return (
        <header>
            <h1>My Universe</h1>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/todo">Todo</NavLink>
                <NavLink to="/coin">Coin</NavLink>
                <NavLink to="/movie">Movie</NavLink>
                <NavLink to="/rocket">Rocket</NavLink>
                <NavLink to="/book">Book</NavLink>
            </nav>

            <button type="button">다크</button>
        </header>
    );
}

export default Header;

import { NavLink } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


function Header() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("ThemeProvider가 필요합니다.");
    }

    const { theme, toggleTheme } = context;
    return (
        <header className="site-header">
            <h1 className="logo">My Universe</h1>

            <nav className="nav-menu">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/todo">Todo</NavLink>
                <NavLink to="/coin">Coin</NavLink>
                <NavLink to="/movie">Movie</NavLink>
                <NavLink to="/product">Product</NavLink>
                <NavLink to="/book">Book</NavLink>
                <NavLink to="/board">Board</NavLink>
            </nav>

            <button className="theme-button" type="button" onClick={toggleTheme}>
                {theme === "olive" ? "**다크" : "**기본"}
            </button>
        </header>
    );
}

export default Header;

import styled from "styled-components";
import { NavLink } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Head = styled.header`
    position: sticky;
    top: 0;
    z-index: 100;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 20px;

    padding: 16px 36px;
    background: #30351d;
    border-bottom: 1px solid #77764b;

    body.black-theme & {
        background: #151515;
        border-bottom-color: #383838;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr auto;
    }
`;

// 2. 왼쪽 로고
const Logo = styled.h1`
    margin: 0;
    font-size: 26px;
    justify-self: start;
`;

// 3. 중앙 메뉴
const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    a {
        color: inherit;
        text-decoration: none;
    }

    a.active {
        color: #f5d881;
        font-weight: bold;
    }

    body.black-theme & a.active {
        color: #ffffff;
    }

    @media (max-width: 900px) {
        grid-row: 2;
        grid-column: 1 / -1;
        flex-wrap: wrap;
    }
`;

// 4. 오른쪽 테마 버튼
const ThemeButton = styled.button`
    justify-self: end;
    width: fit-content;
    min-width: 80px;
    padding: 8px 18px;

    border: 1px solid #77764b;
    border-radius: 20px;
    background: transparent;
    color: inherit;
    cursor: pointer;

    body.black-theme & {
        background: #252525;
        border-color: #555555;
        color: #ffffff;
    }
`;


function Header() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("ThemeProvider가 필요합니다.");
    }

    const { theme, toggleTheme } = context;
    return (
        <Head>
            <Logo>My Universe</Logo>

            <Nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/todo">Todo</NavLink>
                <NavLink to="/coin">Coin</NavLink>
                <NavLink to="/movie">Movie</NavLink>
                <NavLink to="/product">Product</NavLink>
                <NavLink to="/book">Book</NavLink>
                <NavLink to="/board">Board</NavLink>
            </Nav>

            <ThemeButton type="button" onClick={toggleTheme}>
                {theme === "olive" ? "** 다크" : "** 기본"}
            </ThemeButton>
        </Head>
    );
}

export default Header;

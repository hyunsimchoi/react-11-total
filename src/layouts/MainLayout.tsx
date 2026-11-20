
import Header from "../components/Header";
import { Outlet } from "react-router";

function MainLayout() {
    return (
        <div>
            <Header />

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;

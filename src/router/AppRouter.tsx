import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import Coin from "../pages/Coin";
import Movie from "../pages/Movie";
import Rocket from "../pages/Rocket";
import Book from "../pages/Book";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "todo", element: <Todo /> },
            { path: "coin", element: <Coin /> },
            { path: "movie", element: <Movie /> },
            { path: "rocket", element: <Rocket /> },
            { path: "book", element: <Book /> },
        ],
    },
]);

export default AppRouter;

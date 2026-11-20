import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import Coin from "../pages/Coin";
import Movie from "../pages/movie/Movie";
import MovieDetail from "../pages/movie/MovieDetail";
import Product from "../pages/Product";
import Book from "../pages/Book";
import Board from "../pages/Board";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "todo", element: <Todo /> },
            { path: "coin", element: <Coin /> },
            {path: "movie", element: <Movie />,},
            {path: "movie/detail/:imdbID", element: <MovieDetail />,},
            { path: "product", element: <Product /> },
            { path: "book", element: <Book /> },
            { path: "board", element: <Board /> },
        ],
    },
]);

export default AppRouter;

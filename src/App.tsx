import { RouterProvider } from "react-router";
import AppRouter from "./router/AppRouter.tsx";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={AppRouter} />
        </>
    );
}

export default App;

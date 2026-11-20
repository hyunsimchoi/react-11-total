import { RouterProvider } from "react-router";
import AppRouter from "./router/AppRouter.tsx";
import GlobalStyle from "./styles/GlobalStyle";
import {ThemeProvider} from "./contexts/ThemeContext.tsx";

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <RouterProvider router={AppRouter} />
        </ThemeProvider>
    );
}

export default App;

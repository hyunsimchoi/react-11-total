import { RouterProvider } from "react-router";
import AppRouter from "./router/AppRouter.tsx";

function App() {
    return <RouterProvider router={AppRouter} />;
}

export default App;

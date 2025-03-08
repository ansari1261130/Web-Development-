import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App.jsx";
import { Home } from "../components";

const Routers = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path="" element={<Home />} />
        </Route>
    )
);

export default Routers;

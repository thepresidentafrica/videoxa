import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { HomePage } from "../pages";
import { HomeLayout } from "../layouts";

export const baseRoutes = createBrowserRouter(createRoutesFromElements(<Route>
    <Route element={<HomeLayout/>}>
        <Route path="/" index element={<HomePage/>}/>
    </Route>
</Route>))
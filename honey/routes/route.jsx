import { createBrowserRouter, Route } from "react-router";
import Home from "../src/pages/Home";
import { createRoutesFromElements } from "react-router";

import MainLayout from "../layouts/MainLayouts";
import About from "../src/pages/About";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Home />} />
                              <Route path='/about' element={<About />} />

            </Route>
        </>
    )
)
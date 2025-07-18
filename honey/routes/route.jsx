import { createBrowserRouter, Route } from "react-router";
import { createRoutesFromElements } from "react-router";

import MainLayout from "../layouts/MainLayouts";
import About from "../src/pages/About";
import WhyChoossUs from "../src/pages/Home/WhyChoossUs";
import Home from "../src/pages/Home/Home";
import PBenefit from "../src/pages/Home/PBenefit";
import Featured from "../src/pages/Home/Featured";
import BSocial from "../src/pages/Home/BSocial";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Home/>} />
                                <Route path='/whychoos' element={<WhyChoossUs />} />
                                <Route path='/benefit' element={<PBenefit />} />
                                <Route path='/featured' element={<Featured />} />
                                <Route path='/besocial' element={<BSocial />} />

                              <Route path='/about' element={<About />} />

            </Route>
        </>
    )
)
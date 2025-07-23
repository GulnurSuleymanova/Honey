import { createBrowserRouter, Route } from "react-router";
import { createRoutesFromElements } from "react-router";

import MainLayout from "../layouts/MainLayouts";
import About from "../src/pages/About";
import WhyChoossUs from "../src/pages/Home/WhyChoossUs";
import Home from "../src/pages/Home/Home";
import PBenefit from "../src/pages/Home/PBenefit";
import Featured from "../src/pages/Home/Featured";
import BSocial from "../src/pages/Home/BSocial";
import Testimonials from "../src/pages/Home/Testimonials";
import Brend from "../src/pages/Home/Brend";
import Shopbutton from "../src/pages/Home/Shopbutton";
import NotFound from "../src/pages/NotFound";
import Contact from "../src/pages/Contact";
import Faq from "../src/pages/Faq";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Home/>} />
                                <Route path='/whychoos' element={<WhyChoossUs />} />
                                <Route path='/benefit' element={<PBenefit />} />
                                <Route path='/featured' element={<Featured />} />
                                                                <Route path='/testimonials' element={<Testimonials />} />

                                <Route path='/besocial' element={<BSocial />} />
                                <Route path='/brend' element={<Brend />} />
                                <Route path='/shopbutton' element={<Shopbutton />} />

                              <Route path='/about' element={<About />} />
                                                            <Route path='/contact' element={<Contact />} />
                                                                                                                        <Route path='/faq' element={<Faq />} />


      <Route path="*" element={<NotFound />} />


            </Route>
        </>
    )
)
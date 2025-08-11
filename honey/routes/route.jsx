import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../src/pages/Home/Home";
import WhyChooseUs from "../src/pages/Home/WhyChoossUs";
import PBenefit from "../src/pages/Home/PBenefit";
import Featured from "../src/pages/Home/Featured";
import Testimonials from "../src/pages/Home/Testimonials";
import BSocial from "../src/pages/Home/BSocial";
import Brend from "../src/pages/Home/Brend";
import Shopbutton from "../src/pages/Home/Shopbutton";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Faq from "../src/pages/Faq";
import Login from "../src/pages/admin/Login";
import Auth from "./Auth";
import Product from "../src/pages/admin/Product";
import NotFound from "../src/pages/NotFound";
import Category from "../src/pages/admin/Category";
import Shop from "../src/pages/Shop";
import Details from "../src/pages/Details";
import Wishlist from "../src/pages/Wishlist";
import Register from "../src/components/users/Register";
import Loginuser from "../src/components/users/Loginuser";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/whychoos" element={<WhyChooseUs />} />
        <Route path="/benefit" element={<PBenefit />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/besocial" element={<BSocial />} />
        <Route path="/brend" element={<Brend />} />
        <Route path="/shopbutton" element={<Shopbutton />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
                <Route path="/register" element={<Register />} />
                <Route path="/loginuser" element={<Loginuser />} />

                <Route path="/wishlist" element={<Wishlist />} />

                <Route path="/shop" element={<Shop />} />
        <Route path="/details/:id" element={<Details />} />

      </Route>

      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <Auth>
            <AdminLayout />
          </Auth>
        }
      >
        <Route path="product" element={<Product />} />
                <Route path="category" element={<Category />} />

      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUpPage from "./page/SignUpPage.js";
import SignInPage from "./page/SignIn.js";
import HomePage from "./page/HomePage.js";
import LandingPage from "./page/LandingPage.js";
import ProductDetail from "../src/component/detailProduct/ProductDetail.js";
import Products from "./page/Products/Products.js";
import Shoppingcart from "./component/shoppingcart/Shoppingcart.js";
import Admin from "./page/adminpage/Admin.js";
import ContactPage from "./page/ContactPage.js";
import IntroducePage from "./page/IntroducePage.js";
import PayMentPage from "./page/PayMentPage.js";
import ProtectedRoute from "./page/ProtectPage.js";
import OrderPage from "./page/OrderPage.js";
import Dashboard from "./page/adminpage/dashboardAdmin/Dashboard.js";
import Stats from "./page/adminpage/adminComponent/Stats.js";
import EditUserPageAdmin from "./page/adminpage/editPageAdmin/EditUserPageAdmin.js";
import ProductAdminPage from "./page/adminpage/productsAdminPage/ProductAdminPage.js";
import UpdateProductPage from "./page/adminpage/updateproductPage/UpdateProductPage.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sign-up"
          element={
            <>
              <SignUpPage />
            </>
          }
        />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Shoppingcart />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/introduce" element={<IntroducePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/adminpage" element={<Dashboard />} />
        <Route path="/product-admin" element={<ProductAdminPage />} />
        <Route path="/edit-user-page" element={<EditUserPageAdmin />} />
        <Route path="/update-product-page" element={<UpdateProductPage />} />
        <Route path="/stats" element={<Stats />} />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <PayMentPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

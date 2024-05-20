import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./assets/layout/MainLayout";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Services from "./assets/pages/Services";
import Shop from "./assets/pages/Shop";
import Pages from "./assets/pages/Pages";
import Blog from "./assets/pages/Blog";
import Contact from "./assets/pages/Contact";
import Basket from "./assets/pages/Basket";
import WishList from "./assets/pages/WishList";
import BasketProvider from "./assets/context/BasketProvider";

function App() {
  return (
    <>
      <BasketProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/wishList" element={<WishList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BasketProvider>
    </>
  );
}

export default App;

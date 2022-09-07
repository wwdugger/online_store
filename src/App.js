import "./App.css";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import AboutMe from "./components/aboutMe";
import Cart from "./components/cart";
import Catalog from "./components/catalog";
import ShoppingList from "./components/shoppingList";
import Admin from "./components/admin";
import GlobalState from "./store/globalState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar></NavBar>

          <div className="main"></div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/list" element={<ShoppingList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;

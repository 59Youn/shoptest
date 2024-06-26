import "bootstrap/dist/css/bootstrap.min.css";
import "./css/my_reset.css";
import "./css/App.css";

import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Company from "./pages/Company";
import Ceo from "./pages/Ceo";
import Organization from "./pages/Organization";
import Shopall from "./pages/Shopall";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

import { useCallback, useState } from "react";

import { Route, Routes } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  const getProductList = useCallback(async (category) => {
    let url = `http://localhost:5000/products`;
    if (category) {
      url += `?category=${category}`;
    }
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main products={products} getProductList={getProductList} />}
        />
        <Route
          path="/shopall"
          element={
            <Shopall
              products={products}
              setProducts={setProducts}
              getProductList={getProductList}
            />
          }
        />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/company" element={<Company />}>
          <Route path="ceo" element={<Ceo />} />
          <Route path="organization" element={<Organization />} />
        </Route>

        <Route path="*" element={<h1>페이지가 없습니다.</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

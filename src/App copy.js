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

import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";

function App() {
  const [products, setProdects] = useState([]);

  const getProductList = async () => {
    // api를 호출하는 함수
    let url = `http://localhost:5000/products?category=new`;
    let response = await fetch(url);
    let data = await response.json();
    setProdects(data);
  };

  // useEffect(() => {})
  // useEffect(() => {}, [])
  // useEffect(() => {}, [변수, 변수2])
  // useEffect(() => { return ()=>{ 컨포넌트가 제거될 때 1차 실행되는 곳 } }, [])

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main products={products} />} />
        <Route path="/shopall" element={<Shopall />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/company" element={<Company />}>
          <Route path="ceo" element={<Ceo />} />
          <Route path="organization" element={<Organization />} />
          {/* 중첩이 됐을 때는 / 쓰지 않는다 */}
        </Route>

        <Route path="*" element={<h1>페이지가 없습니다.</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

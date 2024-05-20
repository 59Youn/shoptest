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

  // useCallback(()=>{}, [])
  // 불필요한 렌더링을 배제하고, 함수를 재사용하기 위해 사용 (성능 향상)
  const getProductList = useCallback(async (category) => {
    let url = `http://localhost:5000/products`;
    if (category) {
      url += `?category=${category}`;
    }
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
  }, []);

  // const getProductList = async () => {
  //   // api를 호출하는 함수
  //   let url = `http://localhost:5000/products?category=new`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setProdects(data);
  // };

  // useEffect(() => {})
  // useEffect(() => {}, [])
  // useEffect(() => {}, [변수, 변수2])
  // useEffect(() => { return ()=>{ 컨포넌트가 제거될 때 1차 실행되는 곳 } }, [])

  // useEffect(() => {
  //   getProductList();
  // }, []);

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

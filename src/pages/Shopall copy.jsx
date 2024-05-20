import { useEffect, useState } from "react";
import ListCard from "../components/ListCard";

const ShopAll = () => {
  const [products, setProducts] = useState([]);

  // 전체 상품 가져오기
  const getProductList = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
  };

  const getNewList = async () => {
    let url = `http://localhost:5000/products?category=new`;
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
  };

  const getTopList = async () => {
    let url = `http://localhost:5000/products?category=top`;
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
  };

  // 문자열을 재정리
  const getLowPrice = () => {
    products.sort((a, b) => {
      return a.price - b.price;
    });
    setProducts([...products]); // 기존의 배열은 그대로 유지되어야 하기 때문에
  };

  const getHighPrice = () => {
    products.sort((a, b) => {
      return b.price - a.price;
    });
    setProducts([...products]);
  };

  const getDiscountPrice = () => {
    products.sort((a, b) => {
      return b.discount - a.discount;
    });
    setProducts([...products]);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <main className="mw shopall">
      <h2>ShopAll</h2>
      <nav>
        <button onClick={getProductList}>모든 상품</button>
        <button onClick={getNewList}>신상품</button>
        <button onClick={getTopList}>인기상품</button>
        <hr />
        <button onClick={getLowPrice}>낮은가격순</button>
        <button onClick={getHighPrice}>높은가격순</button>
        <button onClick={getDiscountPrice}>높은할인률</button>
      </nav>
      <ul className="listCon">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ListCard product={product} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ShopAll;

import { useState, useEffect } from "react";
import style from "../css/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOn, setIsNavOn] = useState(false);

  // 햄버거메뉴 스크롤 잠금 기능
  useEffect(() => {
    document.body.style.overflowY = isNavOn ? "hidden" : "auto";
  }, [isNavOn]);

  const toggleNav = () => {
    setIsNavOn(!isNavOn);
  };

  return (
    <header className={`${style.hd} mw`}>
      <h1>
        <Link to="/">
          <img src="/img/logo.svg" alt="" />
        </Link>
      </h1>
      <nav className={isNavOn ? `${style.on}` : ""}>
        <div className={style.gnb}>
          <Link to="/shopall">Shop</Link>
          <Link to="#">Blog</Link>
          <Link to="/company/ceo">Our Story</Link>
        </div>
        <div className={style.person}>
          <Link to="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link to="#">
            <i className="fa-regular fa-user"></i>
          </Link>
        </div>
      </nav>
      <button className={style.ham} onClick={toggleNav}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default Header;

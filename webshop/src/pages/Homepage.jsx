import "../css/Homepage.css";
import config from "../data/config.json";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router"
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import CartSumContext from "../store/CartSumContext";
import CarouselGallery from "../components/home/CarouselGallery";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";


function Homepage() {
  //-----------------------------------------------------------------------------
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [DbProducts, SetDbProducts] = useState([]);
  const categories = [...new Set(DbProducts.map(element => element.category))];
  const [sort, setSort] = useState("A-Z");
  const [isLoading, setLoading] = useState(true);
  //-----------------------------------------------------------------------------
  const cartSumCtx = useContext(CartSumContext);
  //-----------------------------------------------------------------------------
  const handleClick = (productId) => {
    navigate(`/single-product/${productId}`);
  }
  //-----------------------------------------------------------------------------
  useEffect(() => {
    fetch(config.productsDbUrl1)
      .then(res => res.json())
      .then(json => {
        SetDbProducts(json)
        setProducts(json);
        setLoading(false);
      });
  }, []);
  //-----------------------------------------------------------------------------
  const addToCart = (clickedProduct) => {
    let cartBB = localStorage.getItem("cart");
    cartBB = JSON.parse(cartBB) || [];
    const index = cartBB.findIndex(element => element.product.id === clickedProduct.id);
    if (index >= 0) {
      cartBB[index].quantity = cartBB[index].quantity + 1;
    } else {
      cartBB.push({ "product": clickedProduct, "quantity": 1 });
    }
    let cartsum = 0;
    cartBB.forEach(element => cartsum = cartsum + element.product.price * element.quantity);
    cartSumCtx.setCartSum(cartsum.toFixed(2));

    cartBB = JSON.stringify(cartBB);
    localStorage.setItem("cart", cartBB);
    toast(t("added-to-cart"), { "positsion": "top-right", "theme": "dark" });
  };
  //-----------------------------------------------------------------------------
  const filterByCategory = (categoryClicked) => {
    const result = DbProducts.filter(element => element.category === categoryClicked)
    setProducts(result);
  }
  //-----------------------------------------------------------------------------
  const sortProducts = () => {
    switch (sort) {
      case "A-Z":
        setProducts(products.sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case "Z-A":
        setProducts(products.sort((a, b) => b.name.localeCompare(a.name)));
        break;
      case "Price increasing":
        setProducts(products.sort((a, b) => a.price - b.price));
        break;
      case "Price decreasing":
        setProducts(products.sort((a, b) => b.price - a.price));
        break;
      default:
        console.error("Invalid sort parameter passed.");
    }
  };
  //-----------------------------------------------------------------------------
  const resetFilters = () => {
    setProducts(DbProducts);
  };
  //-----------------------------------------------------------------------------
  const showAllProducts = () => {
    setProducts(DbProducts);
  };
  //-----------------------------------------------------------------------------


  //---------LOADER BEFORE RETURN--------------
  if (isLoading === true) {
    return (<Spinner animation="grow" variant="dark" />
    )
  }

  return (
    <div>
      <CarouselGallery />
      <div id="productamount"> {products.length}{t(" products on display")}</div>
      <div id="filter-container">

        {categories.map(element =>
          <Button id="categorybutton" key={element.name} variant="warning" onClick={() => filterByCategory(element)}>{element}</Button>)}
        <DropdownButton id="dropdown" variant="success" title="Filter products">
          <DropdownMenu id="dropdownmenu">
            <Button id="dropbutton" variant="dark" onClick={showAllProducts}>{t("Show All Products")}</Button>
            <Button id="dropbutton" variant="dark" onClick={() => { setSort("A-Z"); sortProducts(); }}>{t("Sort A-Z")}</Button>
            <Button id="dropbutton" variant="dark" onClick={() => { setSort("Z-A"); sortProducts(); }}>{t("Sort Z-A")}</Button>
            <Button id="dropbutton" variant="dark" onClick={() => { setSort("Price increasing"); sortProducts(); }}>{t("Sort Price Increasing")}</Button>
            <Button id="dropbutton" variant="dark" onClick={() => { setSort("Price decreasing"); sortProducts(); }}>{t("Sort Price Decreasing")}</Button>
            <Button id="dropbutton" variant="warning" onClick={resetFilters}>{t("Reset Filters")}</Button>
          </DropdownMenu>
        </DropdownButton>
      </div>

      <div className="webshop-container">

        <ToastContainer />
        {products.map((element) =>

          <div className="product-card" key={element.id}>
            <div className="p-category">{t("Category:")}{element.category}</div>
            <img className="p-image" src={element.image} alt="" />
            <div className="p-name">{element.name}</div>
            <dd className="p-description">{element.description}</dd>
            <div className="p-price">{t("Price:")} ${element.price}</div>
            <div className="p-availability">{t("Product is available")}{element.active}</div>
            <button onClick={() => handleClick(element.id)} className="p-info">{t("Product information")}</button>            <button onClick={() => addToCart(element)} className="p-add-cart">{t("Add to Cart")}</button>
          </div>
        )
        }
      </div>
    </div >
  );
}
export default Homepage;


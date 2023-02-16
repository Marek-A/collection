import "../css/Homepage.css";
import config from "../data/config.json";
import { useParams } from "react-router"
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl1)
      .then(res => res.json())
      .then(json => setProduct(json.find(product => product.id === Number(productId))));
    setLoading(false);
  }, [productId]);

  //---------LOADER BEFORE RETURN--------------
  if (isLoading === true) {
    return (<Spinner animation="grow" variant="dark" />
    )
  }
  return (
    <div>
      {product ? (
        <>
          <div className="single-product-name">{product.name}</div>
          <div className="single-product-description">{product.description}</div>
          <div className="single-product-price">{product.price}</div>
          <img className="single-product-image" src={product.image} alt="" />
        </>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
}

export default SingleProduct;
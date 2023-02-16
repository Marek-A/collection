import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import config from "../../data/config.json";



function EditProduct() {

  const [DbProducts, setDbProducts] = useState([]); // peab olema kõige üleval muidu error

  const { productId } = useParams();
  const [idUnique, setIdUnique] = useState(true);
  const productFound = DbProducts.find(element => element.id === Number(productId));
  const index = DbProducts.indexOf(productFound);
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.productsDbUrl1)
      .then(res => res.json())
      .then(json => {
        setDbProducts(json);
      });
  }, []);

  const changeProduct = () => {
    const updatedProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked,
    }

    DbProducts[index] = updatedProduct;

    fetch(config.productsDbUrl1, { "method": "PUT", "body": JSON.stringify(DbProducts) }) // editmiseks 
      .then(() => {
        navigate("/admin/maintain-product");

      })

  }
  const checkIdUniqueness = () => {
    const found = DbProducts.find(element => element.id === Number(idRef.current.value));
    if (found === undefined) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  fetch(config.categoriesDbUrl1)
    .then(res => res.json())
    .then(json => setCategories(json || []));


  return (
    <div>
      {productFound !== undefined &&
        <div>
          {idUnique === false && <div>ID not unique!</div>}
          <label>ID</label> <br />
          <input ref={idRef} onChange={checkIdUniqueness} defaultValue={productFound.id} type="number" /> <br />
          <label>Name</label> <br />
          <input ref={nameRef} defaultValue={productFound.name} type="text" /> <br />
          <label>Price</label> <br />
          <input ref={priceRef} defaultValue={productFound.price} type="number" /> €<br />
          <label>Image</label> <br />
          <input ref={imageRef} defaultValue={productFound.image} type="text" /> <br />
          <label>Category</label> <br />
          <select ref={categoryRef}>
            {categories.map(element => <option>{element.name}</option>)}
          </select><br />
          <label>Description</label> <br />
          <input ref={descriptionRef} defaultValue={productFound.description} type="text" /> <br />
          <label>Active</label> <br />
          <input ref={activeRef} defaultChecked={productFound.active} type="checkbox" /> <br />
          <button disabled={idUnique === false} onClick={changeProduct}>Save edit</button>
        </div>}
      {productFound === undefined && <div>Toodet ei leitud</div>}
    </div>

  )

}

export default EditProduct


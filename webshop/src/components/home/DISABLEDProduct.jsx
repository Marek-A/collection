// import { toast } from "react-toastify";
// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router"

// function Product(props) {
//     const { t } = useTranslation();
//     const navigate = useNavigate()

//     const [products, setProducts] = useState([])

//     const handleClick = (productId) => {
//         navigate(`/single-product/${productId}`);
//     }

//     const addToCart = (clickedProduct) => {

//         let cartBB = localStorage.getItem("cart");
//         cartBB = JSON.parse(cartBB) || [];
//         const index = cartBB.findIndex(element => element.product.id === clickedProduct.id);
//         if (index >= 0) {
//             cartBB[index].quantity = cartBB[index].quantity + 1;
//         } else {
//             cartBB.push({ "product": clickedProduct, "quantity": 1 });
//         }
//         cartBB = JSON.stringify(cartBB);
//         localStorage.setItem("cart", cartBB);
//         toast(t("added-to-cart"), { "positsion": "top-right", "theme": "dark" });
//     };

//     useEffect(() => {
//         fetch(config.productsDbUrl1)
//             .then(res => res.json())
//             .then(json => {
//                 SetDbProducts(json)
//                 setProducts(json);

//             });
//     }, []);

//     return (
//         <div>
//             <div className="product-card" key={props.element.id}>
//                 <div className="p-category">{t("Category:")}{props.element.category}</div>
//                 <img className="p-image" src={props.element.image} alt="" />
//                 <div className="p-name">{props.element.name}</div>
//                 <dd className="p-description">{props.element.description}</dd>
//                 <div className="p-price">{t("Price:")} ${props.element.price}</div>
//                 <div className="p-availability">{t("Product is available")}{props.element.active}</div>
//                 <button onClick={() => handleClick(props.element.id)} className="p-info">{t("Product information")}</button>
//                 <button onClick={() => addToCart(props.element)} className="p-add-cart">{t("Add to Cart")}</button>
//             </div>
//         </div>
//     )
// }

// export default Product
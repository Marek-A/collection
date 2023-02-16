
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Button from 'react-bootstrap/Button';
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import config from "../../data/config.json";


// function SortButton(props) {

//     const { t } = useTranslation();
//     const [DbProducts, SetDbProducts] = useState([]);
//     const categories = [...new Set(DbProducts.map(element => element.category))];
//     const [sort, setSort] = useState("A-Z");


//     const filterByCategory = (categoryClicked) => {
//         const result = DbProducts.filter(element => element.category === categoryClicked)
//         setProducts(result);
//     }


//     //-----------------------------------------------------------------------------
//     const sortProducts = () => {

//         switch (sort) {
//             case "A-Z":
//                 setProducts(props.products.sort((a, b) => a.name.localeCompare(b.name)));
//                 break;
//             case "Z-A":
//                 setProducts(props.products.sort((a, b) => b.name.localeCompare(a.name)));
//                 break;
//             case "Price increasing":
//                 setProducts(props.products.sort((a, b) => a.price - b.price));
//                 break;
//             case "Price decreasing":
//                 setProducts(props.products.sort((a, b) => b.price - a.price));
//                 break;
//             default:
//                 console.error("Invalid sort parameter passed.");
//         }
//     };
//     //-----------------------------------------------------------------------------
//     const resetFilters = () => {
//         setProducts(DbProducts);
//     };
//     //-----------------------------------------------------------------------------
//     const showAllProducts = () => {
//         setProducts(DbProducts);
//     };
//     //-----------------------------------------------------------------------------

//     return (
//         <div className="filter-container">
          
//           <DropdownButton variant="success" title="Filter products">
//                 <Dropdown.Menu>
//                     <button onClick={resetFilters}>{t("Reset Filters")}</button>
//                     <button onClick={() => { setSort("A-Z"); sortProducts(); }}>{t("Sort A-Z")}</button>
//                     <button onClick={() => { setSort("Z-A"); sortProducts(); }}>{t("Sort Z-A")}</button>
//                     <button onClick={() => { setSort("Price increasing"); sortProducts(); }}>{t("Sort Price Increasing")}</button>
//                     <button onClick={() => { setSort("Price decreasing"); sortProducts(); }}>{t("Sort Price Decreasing")}</button>
//                     <button onClick={showAllProducts}>{t("Show All Products")}</button>
//                 </Dropdown.Menu>
//             </DropdownButton>

//         </div>
//     )
// }

// export default SortButton
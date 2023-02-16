import { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from "react-toastify";
import config from "../../data/config.json";

function AddProduct() {

    const idRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const activeRef = useRef();
    const [idUnique, setIdUnique] = useState(true);
    const [DbProducts, setDbProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(config.productsDbUrl1) // võtmiseks
            .then(res => res.json())
            .then(json => {
                setDbProducts(json);
            });
    }, []);

    const addProduct = () => {
        if (idRef.current.value === "") {
            toast.error("ID is missing!", { "position": "top-left", "theme": "dark" });
            return;
        }
        if (nameRef.current.value === "") {
            toast.error("Name is missing!", { "position": "top-left", "theme": "dark" });
            return;
        }
        if (nameRef.current.value.charAt(0).toLowerCase() === nameRef.current.value.charAt(0)) {
            toast.error("Name must start with uppercase!", { "position": "top-left", "theme": "dark" });
            return;
        }
        if (imageRef.current.value === "") {
            toast.error("Image is missing!", { "position": "top-left", "theme": "dark" });
            return;
        }
        if (imageRef.current.value.replaceAll(" ", "") !== imageRef.current.value) {
            toast.error("Image is missing!", { "position": "top-left", "theme": "dark" });
            return;
        }

        if (priceRef.current.value === "") {
            toast.error("Price is missing!", { "position": "top-left", "theme": "dark" });
            return;
        }
        if (categoryRef.current.value === "") {
            toast.error("Category is missing!", { "position": "top-left", "theme": "dark" });
            return;
        }
        if (descriptionRef.current.value === "") {
            toast.error("Description is missing!", { "position": "top-left", "theme": "dark" });
            return;
        }
        if (activeRef.current.value === "") {
            toast.error("Active status is missing!", { "position": "top-left", "theme": "dark" });
            return;
        }

        const newProduct = {
            id: Number(idRef.current.value),
            name: nameRef.current.value,
            price: Number(priceRef.current.value),
            image: imageRef.current.value,
            category: categoryRef.current.value,
            description: descriptionRef.current.value,
            active: activeRef.current.checked,
        }


        DbProducts.push(newProduct);
        fetch(config.productsDbUrl1, { "method": "PUT", "body": JSON.stringify(DbProducts) }) // lisamiseks 
            .then(() => {
                toast.success("Toode lisatud!", { "position": "top-right", "theme": "dark" });
                idRef.current.value = "";
                nameRef.current.value = "";
                priceRef.current.value = "";
                imageRef.current.value = "";
                categoryRef.current.value = "";
                descriptionRef.current.value = "";
                activeRef.current.value = false;
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

            <div>
                <ToastContainer />
                {idUnique === false && <div>ID not unique!</div>}
                <label>ID:</label><br />
                <input ref={idRef} onChange={checkIdUniqueness} defaultValue={DbProducts.id} type="number" /> <br />
                <label>Name:</label><br />
                <input ref={nameRef} type="text" /><br />
                <label>Price:</label><br />
                <input ref={priceRef} type="number" /><br />
                <label>Image:</label><br />
                <input ref={imageRef} type="text" /><br />
                <label>Category:</label><br />
                {/* <input ref={categoryRef} type="text" /><br /> */}

                <select ref={categoryRef}>
                    {categories.map(element => <option>{element.name}</option>)}
                </select><br />

                <label>Description:</label><br />
                <input ref={descriptionRef} type="text" /><br />
                <label>Active:</label><br />
                <input ref={activeRef} type="checkbox" /><br />
                <button disabled={idUnique === false} onClick={addProduct}>Add product</button>
                {DbProducts === undefined && <div>Toodet ei leitud</div>}
            </div>
        </div>

    );
}

export default AddProduct;

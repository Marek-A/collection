import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddProduct() {
    const [product, setProduct] = useState({
        id: "",
        name: "",
        price: "",
        image: "",
        category: "",
        description: "",
        active: false
    });
    const history = useHistory();

    function handleChange(event) {
        const { name, value, checked } = event.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: name === "active" ? checked : value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Add code here to save the product to your database or local storage
        history.push("/admin");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input
                    type="text"
                    name="id"
                    value={product.id}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Price:
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Image:
                <input
                    type="text"
                    name="image"
                    value={product.image}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Category:
                <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Description:
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Active:
                <input
                    type="checkbox"
                    name="active"
                    checked={product.active}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Add Product</button>
        </form>
    );
}

export default AddProduct;


// In this example, I am using the useState hook to keep track of the product data as it is being entered by the user.The handleChange function is used to update the state with the new values as the user types in the input fields.The handleSubmit function is used to handle the form submission and save the product data, and also redirect to the admin page.
// It also uses react - router - dom's useHistory hook to redirect the user to a new page.
// Please note that this is just a sample code, you need to add the code to




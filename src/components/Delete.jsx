import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../api-fetch";

function Delete(props) {
  const allProducts = props.allProducts;
  const setAllProducts = props.setAllProducts;
  const productInfo = props.productInfo;
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const response = await deleteProduct(productInfo._id);
      const updateProducts = allProducts.filter((product) => product._id !== productInfo._id);
      setAllProducts(updateProducts);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return <button onClick={handleDelete}>Delete</button>;
}

export default Delete;
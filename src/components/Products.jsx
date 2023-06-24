import React from "react";
import { useState } from "react";
import { fetchProducts } from "../api-fetch";
import { Link } from 'react-router-dom'

export default function Products(props){
 const [allProducts, setAllProducts] = useState([]);
    return(
        <div>
        <h2>The products</h2>
       <h4>Want to create new product?  <Link to='/login'>Login</Link></h4>
<section id="productPage">
{
    props.allProducts.length ? props.allProducts.map((singleProduct) =>{
        return(
            <div className = "productBox" key = {singleProduct._id}>
                <p>{singleProduct.title}</p>
                <p>{singleProduct.price}</p>
              <Link  to={`/${singleProduct._id}`}>See more Info!</Link>

            
            </div>
        )
    }) : <p>Loading products...</p>
}
</section>
        </div>
    )
}
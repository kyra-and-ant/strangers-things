import React from "react";
import { useState } from "react";
import { fetchProducts } from "../api-fetch";
import { Link } from 'react-router-dom'

export default function Products(props){
 const [allProducts, setAllProducts] = useState([]);
    return(
        <div>
        <h2 id="productTitle">The Products</h2>
       <h4>Want to create new product?  <Link to='/login'>Login</Link></h4>
<section id="productPage">
{
    props.allProducts.length ? props.allProducts.map((singleProduct) =>{
        return(
            <ul className = "productBox" key = {singleProduct._id}>
                <li>{singleProduct.title}</li>
                {/* <li>{singleProduct.price}</li> */}
              <Link  to={`/${singleProduct._id}`}>See more Info!</Link>

            
            </ul>
        )
    }) : <p>Loading products...</p>
}
</section>
        </div>
    )
}
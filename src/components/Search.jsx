
import { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  let filteredproducts = allProducts.filter((product)=>{
    let lowercasedName = product.name.toLowerCase();
    let lowercasedQuery = searchQuery.toLowerCase();

    if (lowercasedName.includes(lowercasedQuery)) {
      return product;
    }
  });
  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await fetch((`${BASE_URL}/posts`)
        );
        const translatedData = await response.json();
        setAllProducts(translatedData.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllProducts();
  },[]);
  return (
    <div id="container">
      <form>
        <label className="search-products" htmlFor="search-query">
          Search Products:{" "}
        </label>
        <input
          name="search-query"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(search) => {
            setSearchQuery(search.target.value);
          }}
        ></input>
      </form>
      <div>
        {filteredproducts.length ? (
          filteredproducts.map((product, idx) => {
            return <SingleProduct key={idx} product={product} />;
          })
        ) : (
          <p>Product doesn't exist</p>
        )}
      </div>
    </div>
  );
}

export default Search;

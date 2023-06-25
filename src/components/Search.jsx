
import { useState, useEffect } from "react";
import SearchProduct from "./SearchProduct";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");
  let filteredproducts = props.allProducts.filter((product)=>{
    console.log(product)
    let lowercasedName = product.title.toLowerCase();
    let lowercasedQuery = searchQuery.toLowerCase();

    if (lowercasedName.includes(lowercasedQuery)) {
      return product;
    }
  });
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
            return <SearchProduct key={idx} product={product} allProducts={props.allProducts} />;
          })
        ) : (
          <p>Product doesn't exist</p>
        )}
      </div>
    </div>
  );
}

export default Search;
import { useParams } from "react-router-dom"

export default function SearchProduct(props){

    const { id } = useParams();

    return(
        <div>
           <h2 id="searchProduct">Product:</h2>
           {props.product && props.product.title ? 
           
           
           <p id="searchSingle"> {props.product.title}</p> : null }

</div>
   
    )
    
}
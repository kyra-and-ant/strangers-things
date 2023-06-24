import { useParams } from "react-router-dom"

export default function SearchProduct(props){

    const { id } = useParams();

    return(
        <div>
          <h2>Product:</h2>
           {props.product && props.product.title ? 
           
           
           <p> {props.product.title}</p> : null }

</div>
   
    )
    
}
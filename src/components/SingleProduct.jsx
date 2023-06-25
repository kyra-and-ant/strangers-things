import { useParams } from "react-router-dom"
import Delete from "./Delete";

export default function SingleProduct (props){
  
    const { id } = useParams();
    const filteredProduct = props.allProducts.filter((singleProduct) => {
        console.log(typeof singleProduct._id)
        if(singleProduct._id === id){
            return singleProduct
        }
    })
    return(
        <div>
         
           { filteredProduct[0] && filteredProduct[0].title ? 
           
           <>
           <p> {filteredProduct[0].title}</p>
           <p> {filteredProduct[0].description}</p> 
           <p> {filteredProduct[0].price}</p> 
           </> : null }

           <section>
            <Delete id={filteredProduct[0]._id} />
           </section>
</div>
   
    )
    
}

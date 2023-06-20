import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function SingleProduct (props){
   const [specificProduct, setSpecificProduct] = useState(null);
   const allProducts = props.allProducts

    const { id } = useParams();
  useEffect(() => {
    const filteredProduct = allProducts.filter((singleProduct) => {
        console.log(typeof singleProduct._id)
        if(singleProduct._id === id){
            return singleProduct
        }
    })
      if(filteredProduct.length){
        setSpecificProduct(filteredProduct[0])
      }else{
         setSpecificProduct(null)
      }
  }, [allProducts])

  
    
    console.log(allProducts , id)
    
    console.log(specificProduct)
    return(
        <div>
          
           { specificProduct && specificProduct.title ? 
           
           <div>
           <p>Title:{specificProduct.title}</p>
           <p>{specificProduct.description}</p>
           <p>Location:{specificProduct.location}</p>
           <p>Delivery(Y/N):{specificProduct.willDeliver}</p>
           <p>Username:{specificProduct.author.username}</p>
          
            </div>
            : null }

        </div>
    )
    
}

import React from "react";
import { useNavigate } from "react-router-dom";
// import { deleteProduct } from "../api-fetch";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


function Delete(props) {
// console.log('this is the delete props')
    const navigate = useNavigate();

 console.log(props)
    const handleSubmit = async(event) => {
        event.preventDefault()
   
        try {
            const result = await deleteProduct(props.id); 
            // console.log('this is the delete console log')
            console.log(result)
        
            navigate("/")
        } catch (error) {
            console.log(error)
        }

    }



    async function deleteProduct(productId) {
        try {
            const token = localStorage.getItem("token");
            console.log(token)
            console.log("productId", productId)
            const response = await fetch(`${BASE_URL}/posts/${productId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },

            }); 
            // console.log('this is the response')
            // console.log(response)
            const result = await response.json()
console.log(result)
            if(result.success === true) {
                const filteredProducts = props.items.filter((singleProduct) => {
                    if(singleProduct._id !== productId){
                        return singleProduct
                    }
                })
    
                props.setItems(filteredProducts)

            }
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div id="deleteproduct">
            

                <button id="delete-button" onClick={handleSubmit} type="submit">Delete</button>

            
        </div>
    )
}




export default Delete;
import { useState } from "react"
// import {makePost} from "../api-fetch"
import {  useNavigate } from "react-router";
import Register from "./Register";
const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function NewPost(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('')
    const [price, setPrice] = useState('')
    const [allProducts, setAllProducts] = useState([]);
   const navigate = useNavigate();
   
    async function sendPostRequest(event, username, password) {
        event.preventDefault(); 
        const token = localStorage.getItem('token')
        console.log(token)
        try {
          const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              post:{ 
              title: title,
              description: description,
              price: price
              }
            })
          })
          const translatedData = await response.json(); 
console.log(translatedData.data.post)
          setAllProducts([...allProducts, translatedData.data.post])
        navigate('/')
        } catch (error) {
          console.log(error);
        }
      }
             
    return(
        <div>

<h2>Make a new post</h2>
<form onSubmit={sendPostRequest}>
    <label htmlFor="post-title">Post Title:
        <input
        type="text"
        value={title}
        onChange = {(event) => {
            setTitle(event.target.value)}}
        />
    </label>
    <label htmlFor="post-desc">Post Description:
    <input
    type="text"
    value={description}
    onChange = {(event) => {
        setDescription(event.target.value)}}/></label>
    <label htmlFor="post-price">Price:
        <input
        type="number"
        value={price}
        onChange = {(event) => {
            setPrice(event.target.value)}} />
    </label>
    <button type="submit">Create new post</button>
</form>
        </div>
    )
}
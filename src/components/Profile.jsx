import { Link } from "react-router-dom"
import React from "react"
import NewPost from "./NewPost"


export default function Profile(){
    return(
        <div>
        <h1>Welcome to your profile!</h1>
        <Link to= '/newPosts'>Create a new listing</Link>
        </div>
    )
} 
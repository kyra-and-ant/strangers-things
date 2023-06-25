import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar (){
    return(
<div id="navBar">
<Link to="/">Home  </Link>
 {/* Product View */}
<Link to= '/register'>Register  </Link>
<Link to='/login'>Profile </Link>
<Link to='/search'>Search</Link>
{/* <Link to= '/newPosts'>Create a new Listing</Link> */}

</div>
    
    )
}
import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar ({ isLoggedIn, setIsLoggedIn }){
    console.log(isLoggedIn)
    return(
<div>
{isLoggedIn ? (
        <>
          <Link to="/">Home </Link>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
<Link to="/">Product View  </Link>
<Link to= '/register'>Register  </Link>
<Link to='/login'>Login  </Link>
<Link to= '/newPosts'>Create a new Listing</Link>
</>
      )}
</div>
    
    )
}
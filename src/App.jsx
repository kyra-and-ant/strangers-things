import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom';
import './App.css'
import Products from './components/Products';
import NavBar from './components/Navbar';
import { fetchProducts } from './api-fetch';
import Register from './components/Register'
import Login from './components/Login';
import SingleProduct from './components/SingleProduct';
import NewPost from './components/NewPost';

function App() {
  const [allProducts, setAllProducts] = useState([]);
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(()=>{
  const token = localStorage.getItem('token');
  if(token){
    setIsLoggedIn(true);
  }
 },[]);

  useEffect (()=>{
  async function fetchAllProducts(){
    try{
    let response = await fetchProducts();
    setAllProducts(response.posts)
    }catch(error){
      console.error(error)
    }
  }
   fetchAllProducts();
  },[])
console.log(allProducts)


    
  return (
    <>
     <h1>Stranger's Things</h1>
     <NavBar isLoggedin = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
     <Routes>
      <Route path='/' element = {<Products allProducts={allProducts} />} />
      <Route path='/register' element = {<Register setIsLoggedIn = {setIsLoggedIn}/>} />
       <Route path='/login' element = {<Login setIsLoggedIn = {setIsLoggedIn}/>} /> 
      <Route path='/:id' element = {<SingleProduct allProducts = {allProducts} />} />
      <Route path='/newPosts' element = { <NewPost setIsLoggedIn = {setIsLoggedIn} />} />
     </Routes>
    </>
  )
}

export default App

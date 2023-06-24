import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom';
import './App.css'
import Products from './components/Products';
import NavBar from './components/Navbar';
import { fetchProducts } from './api-fetch';
import Register from './components/Register'
import Login from './components/Login';
import SingleProduct from './components/SingleProduct';
import Profile from './components/Profile';
import Search from './components/Search';
import NewPost from './components/NewPost';
function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
     <NavBar />
     <Routes>
      <Route path='/' element = {<Products allProducts={allProducts} />} />
      <Route path='/register' element = {<Register />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/:id' element = {<SingleProduct allProducts = {allProducts} />} />
      <Route path='/profile' element = {<Profile />} />
      <Route path='/search' element = {<Search allProducts = {allProducts} />} />
      <Route path='/newPosts' element = {<NewPost setIsLoggedIn = {setIsLoggedIn} />} />
     </Routes>
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom';
import './App.css'
import Products from './components/Products';
import NavBar from './components/Navbar';
import { fetchProducts } from './api-fetch';
import Register from './components/Register'
import SingleProduct from './components/SingleProduct';
function App() {
  const [allProducts, setAllProducts] = useState([]);

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
      <Route path='/:id' element = {<SingleProduct allProducts = {allProducts} />} />
     </Routes>
    </>
  )
}

export default App

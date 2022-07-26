import logo from './logo.svg';
import './App.css';
import { Product } from './components/products/Product';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MainCard } from './components/Card/MainCard';
import { useState } from 'react';
import { CartProvider } from './store/CartProvider';



function App() {

  const [maincartisshown, setmaincartishown]=useState(false)

  const showCartHnadler=()=> {
    setmaincartishown(true)
  }
  const hideCartHnadler=()=> {
    setmaincartishown(false)
  }
  return (
    <> 
    <CartProvider>
    {maincartisshown &&  <div className='modalcard'><MainCard onclose={hideCartHnadler} /></div>}   
      <Header  onshowcart={showCartHnadler}/>
      <Product/>
      <Footer />
      
      </CartProvider>
    </>
     
  );
}

export default App;

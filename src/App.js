import logo from './logo.svg';
import './App.css';
import { Product } from './components/products/Product';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MainCard } from './components/Card/MainCard';
import { useState } from 'react';




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
    {maincartisshown &&  <div className='modalcard'><MainCard onclose={hideCartHnadler} /></div>}   
      <Header  onshowcart={showCartHnadler}/>
      <Product/>
      <Footer />
    </>
     
  );
}

export default App;

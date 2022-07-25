import logo from './logo.svg';
import './App.css';
import { Product } from './components/products/Product';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <Product/>
      <Footer />
    </>
     
  );
}

export default App;

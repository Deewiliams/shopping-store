import './App.css';
import ProductList from './Pages/ProductList';
import ProductDetail from './Pages/ProductDetail';
import { Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="product_detail/:productId" element={<ProductDetail />} />
      </Routes>
   
  
    </div>
  );
}

export default App;

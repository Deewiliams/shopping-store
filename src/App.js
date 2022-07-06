import './App.css';
import ProductList from './Pages/ProductList';
import ProductDetail from './Pages/ProductDetail';
import Category from './Pages/Category';
import { Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="product_category/:categoryId" element={<ProductList />} />
        <Route path="product_detail/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;

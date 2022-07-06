import './App.css';
import ProductList from './Pages/ProductList';
import ProductDetail from './Pages/ProductDetail';
import Category from './Pages/Category';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" exact element={<Category />} />
        <Route  path="/product_detail/:productId" exact element={<ProductDetail />} />
        <Route  path="/product_category/:categoryId" exact element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;

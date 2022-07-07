import { Routes, Route } from 'react-router-dom';
import ProductList from './Pages/ProductList';
import ProductDetail from './Pages/ProductDetail';
import Category from './Pages/Category';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Category />} />
        <Route path="/product_detail/:productId" exact element={<ProductDetail />} />
        <Route path="/product_category/:categoryId" exact element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;

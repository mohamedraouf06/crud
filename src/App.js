import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Home from "./pages/Home";
import ProductDeteils from "./pages/ProductDeteils";
import Products from "./pages/Products";
function App() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
            <Sidebar/>
        </div>
        <div className="col-10">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products/>} />
        <Route path="products/add" element={<AddProduct/>} />
        <Route path="products/:productId" element={<ProductDeteils/>} />
        <Route path="products/edit/:productEdit" element={<EditProduct/>} />
      </Routes>
        </div>
      </div>
    </>
  );
}
export default App;

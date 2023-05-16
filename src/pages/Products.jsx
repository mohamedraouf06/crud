import "./Products.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  //get All Products
  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  //Delete Product
  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are You Sure to Delete ${product.title}`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`,{
          method : "DELETE"
        })
        .then((res)=>res.json())
        .then(()=>{
          getAllProducts()
        })
      } 
    });
  };
  return (
    <div>
      <h1>Products Page</h1>
      <Link to={"/products/add"} className="btn btn-success mt-3">
        Add New Product
      </Link>
      <table className="table table-striped products-table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products
            ? products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price} $</td>
                    <td>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => deleteProduct(product)}
                      >
                        Delete
                      </button>
                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-info me-2"
                      >
                        View
                      </Link>
                      <Link to={`/products/edit/${product.id}`} className="btn btn-primary">Edit</Link>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
export default Products;

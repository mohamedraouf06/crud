import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("0");

  let navigate = useNavigate()

  //form Submit
  const formSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/products",{
      title,
      price,
      
    }).then((data)=>{
      console.log(data);
      navigate('/Products')
    })
  };
  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="productTitle"
            aria-describedby="Product title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="productPrice"
            placeholder="productPrice"
            aria-describedby="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Product
        </button>
      </form>
    </>
  );
}
export default AddProduct;

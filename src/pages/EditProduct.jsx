import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function EditProduct() {
  const params = useParams();
  const [productEdit, setProductEdit] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:9000/products/${params.productEdit}`)
      .then((res) => {
        setProductEdit(res.data);
      });
  }, []);

  const fromSubmit = (e) => {
    e.preventDefault();
    
    axios.put(`http://localhost:9000/products/${params.productEdit}`, {
        title,
        price,
      })
      .then((data) => {
        console.log(data);
        navigate("/Products");
      });
  };

  return (
    <>
      <form onSubmit={fromSubmit}>
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
            defaultValue={productEdit.title}
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
            defaultValue={productEdit.price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark mt-3">
          Update Product
        </button>
      </form>
    </>
  );
}
export default EditProduct;

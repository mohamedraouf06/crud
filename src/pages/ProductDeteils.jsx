import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function ProductDeteils () {
  const params = useParams();
  const [product , setProdcut]=  useState([]) ;
  useEffect(()=>{
    axios.get(`http://localhost:4000/products/${params.productId}`)
    .then((res)=>{
      setProdcut(res.data);
    })
  },[])
  return(
    <div className="details">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <h3>{product.price} <span>$</span></h3>
    </div>
  )
}
export default ProductDeteils;
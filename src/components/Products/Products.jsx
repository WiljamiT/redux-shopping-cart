import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

import { addProducts } from "../../redux/actions/actions";
import Product from "../Product/Product";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    console.log("Loading products...");
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      dispatch(addProducts(response.data));
    });
  }, [dispatch]);

  const productItems = products.map((product, index) => (
    <Product key={index} product={product} />
  ));

  return loading ? (
    <div className="Products">
      <h2>Products</h2>
      <p>Products loading...</p>
    </div>
  ) : (
    <div className="Products">
      <h2>Products</h2>
      {productItems}
    </div>
  );
};

export default Products;

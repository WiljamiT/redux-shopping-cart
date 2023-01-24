import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/actions";
import "./Product.css";

const Product = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product, index) => {
    dispatch(addToCart(product, index));
  };

  return (
    <div className="Product">
      <h4>{props.product.title}</h4>
      <img src={props.product.image} alt={props.product.title} />
      <div className="Infos">
        <p>{props.product.description}</p>
      </div>
      <button onClick={() => handleAddToCart(props.product, props.index)}>
        Buy
      </button>
    </div>
  );
};

export default Product;

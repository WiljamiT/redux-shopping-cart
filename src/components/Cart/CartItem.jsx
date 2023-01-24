import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/actions";
import "./CartItem.css";

const ShoppingCartItem = (props) => {
  const dispatch = useDispatch();

  const handleremoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <div>
      <div className="CartItem">
        <p>{props.product.title}</p>
        <img className="imgg" src={props.product.image} alt="img of product"></img>
        <p>{props.product.price} €</p>
        <button className="ShoppingCartRemoveButton" onClick={() => handleremoveFromCart(props.index)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;

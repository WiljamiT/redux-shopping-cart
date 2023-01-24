import { useSelector } from "react-redux";
import ShoppingCartItem from "./CartItem";

import "./Cart.css";

const ShoppingCart = () => {
  const Total = () => {
    const shoppingCart = useSelector((state) => state.shoppingCart);
    var totalPrice = 0;

    shoppingCart.forEach((product) => {
      totalPrice += product.price;
    });

    return (
      <div className="Total">
        <h2>Total: {totalPrice} €</h2>
      </div>
    );
  };
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const shoppingCartItems = shoppingCart.map((product, index) => (
    <ShoppingCartItem key={index} product={product} index={index} />
  ));

  return shoppingCart.length === 0 ? (
    <div className="Container">
      <div className="CartPrice">
        <h2>Shopping Cart |</h2>
        <Total />
      </div>
      <div className="ShoppingCart">
        <p>Your cart is empty.</p>
      </div>
    </div>
  ) : (
    <div className="Container">
      <div className="CartPrice">
        <h2>Shopping Cart |</h2>
        <Total />
      </div>
      <div className="ShoppingCart">{shoppingCartItems}</div>
    </div>
  );
};

export default ShoppingCart;

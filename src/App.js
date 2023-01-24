import "./App.css";

import Products from "./components/Products/Products";
import ShoppingCart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <div className="Prods">
        <Products />
      </div>
      <ShoppingCart />
    </div>
  );
}

export default App;

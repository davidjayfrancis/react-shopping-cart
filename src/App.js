import React, { useState } from "react";
import { Route } from "react-router-dom";
import { ProductContext } from "./contexts/ProductContext.js";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    let newCart = cart;
    newCart.push(item);
    setCart(newCart);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <div className="App">
        <Navigation cart={cart} />
        {/* Routes */}
        <Route exact path="/" component={Products} />} />
        <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
      </div>
    </ProductContext.Provider>
  );
}

export default App;

import "./App.css";
import Items from "./components/Items";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import jsonData from "./data/products.json";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(jsonData);
  }, []);

  function refreshCart() {
    let newItems = items.filter((oneItem) => oneItem.amount > 0);
    setCartItems(newItems);
  }

  function addItem(id) {
    setCartNum(cartNum + 1);

    items.forEach((item) => {
      if (item.id === id) {
        item.amount++;
      }
    });

    refreshCart();
  }

  function removeItem(id) {
    setCartNum(cartNum - 1);

    items.forEach((item) => {
      if (item.id === id) {
        item.amount--;
      }
    });

    refreshCart();
  }

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route
          path="/"
          element={<Items items={items} addItem={addItem} cartNum={cartNum} />}
        />
        <Route
          path="/korpa"
          element={
            <Cart
              items={cartItems}
              addItem={addItem}
              removeItem={removeItem}
              cartNum={cartNum}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

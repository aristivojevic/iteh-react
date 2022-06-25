import OneItem from "./OneItem";
import React from "react";
import NavBar from "./NavBar";

const Cart = ({ items, addItem, removeItem, cartNum }) => {
  return (
    <>
      <NavBar cartNum={cartNum}></NavBar>

      <div>
        <h3 className="caption">Moja korpa:</h3>

        <div className="all-items">
          {cartNum > 0 ? (
            items.map((oneItem) => (
              <OneItem
                item={oneItem}
                key={oneItem.id}
                inCart={true}
                addItem={addItem}
                removeItem={removeItem}
              />
            ))
          ) : (
            <h3 className="empty-cart"> Vaša korpa je prazna. </h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

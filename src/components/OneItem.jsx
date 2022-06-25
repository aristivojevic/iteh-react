import React from "react";

function OneItem({ item, addItem, removeItem, inCart }) {
  return (
    <div className="card">
      <img className="card-img-top" src={require(`../data/${item.img}`)} />
      <div className="card-body">
        <div className="card-title">{item.title}</div>
        <div className="card-brand">{item.brand}</div>
        <div>
          <div className="card-text">{item.description}</div>
        </div>

        <div className="card-price">{item.price}</div>
        {!inCart ? (
          <>
            <button className="btn card-btn" onClick={() => addItem(item.id)}>
              Dodaj u korpu
            </button>
          </>
        ) : (
          <>
            <div className="card-count">Količina: {item.amount}</div>
            <div className="cart-buttons">
              <button
                className="btn card-btn card-btn-cart"
                onClick={() => addItem(item.id)}
              >
                Dodaj
              </button>
              <button
                className="btn card-btn card-btn-cart"
                onClick={() => removeItem(item.id)}
              >
                Izbaci
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default OneItem;

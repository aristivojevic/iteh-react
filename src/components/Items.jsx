import React, { useState } from "react";
import OneItem from "./OneItem";
import NavBar from "./NavBar";

const Items = ({ items, addItem, cartNum }) => {
  const [sort, setSort] = useState(true);

  function sortAsc() {
    setSort(false);
  }

  function sortDesc() {
    setSort(true);
  }

  return (
    <>
      <NavBar cartNum={cartNum}></NavBar>

      <div className="container">
        <div className="buttons">
          <button className="sortbtn btn" onClick={sortAsc}>
            Sortiraj rastuće
          </button>
          <button className="sortbtn btn" onClick={sortDesc}>
            Sortiraj opadajuće
          </button>
        </div>
        <div className="all-items">
          {sort === true ? (
            <>
              {items
                .sort((a, b) =>
                  parseInt(a.price.split(" ")[0]) <
                  parseInt(b.price.split(" ")[0])
                    ? 1
                    : -1
                )
                .map((oneItem) => (
                  <OneItem item={oneItem} key={oneItem.id} addItem={addItem} />
                ))}
            </>
          ) : (
            <>
              {items
                .sort((a, b) =>
                  parseInt(a.price.split(" ")[0]) <
                  parseInt(b.price.split(" ")[0])
                    ? -1
                    : 1
                )
                .map((oneItem) => (
                  <OneItem item={oneItem} key={oneItem.id} addItem={addItem} />
                ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Items;

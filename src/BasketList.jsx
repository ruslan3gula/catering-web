import React, { useContext, useState } from "react";
import { BasketContext } from "./backendMock/basket/BasketContext";
import "./BasketList.css";

export const BasketList = (props) => {
  const [basket, setBasket] = useContext(BasketContext);
  const [open, toggleOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleSidebar = () => {
    toggleOpen((open) => !open);
    return open;
  };
  console.log(basket);

  const clearBasket = () => {
    setBasket([]);
    setChecked(false);
  };

  return (
    <div
      id="sidenav"
      className={open ? "sidenav" : "sidenav open"}
      onClick={handleSidebar}
    >
      {basket.map((item) => (
        <div>
          <span>{item.id}: </span>
          <span> {item.meal}</span>
        </div>
      ))}
      <button onClick={clearBasket}>Clear all item</button>
    </div>
  );
};

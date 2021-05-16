import React, { useContext } from "react";
import { BasketContext } from "./BasketContext";
import "./Basket.css";

export const Basket = () => {
  const [basket, setBasket] = useContext(BasketContext);
  const totalPrice = basket.reduce((acc, curr) => acc + curr.price, 0);
  console.log(basket);
  return (
    <div className="basket_container ">
      <div className="basket">
        <span>
          <strong>items in cart :</strong> {basket.length}
        </span>
        <br />
        <span>
          <strong>total price :</strong> {totalPrice}
        </span>
      </div>
    </div>
  );
};

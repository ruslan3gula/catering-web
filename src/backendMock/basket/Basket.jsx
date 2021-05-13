import React, { useContext } from "react";
import BasketContext from "./BasketContext";

export default function Basket() {
  const [basket, setBasket] = useContext(BasketContext);
  return (
    <div>
      <p>item in basket {basket.length}</p>
    </div>
  );
}

import React, { useState } from "react";
export const BasketContext = React.createContext();

export default function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);
  return (
    <BasketContext.Provider value={[basket, setBasket]}>
      {children}
    </BasketContext.Provider>
  );
}

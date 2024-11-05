import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export function CartContextProvider({ children }) {
  return <createContext.Provider>{children}</createContext.Provider>;
}

export default CartContext;

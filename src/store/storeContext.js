import { createContext } from "react";

// context describes the data structure
//but does not provide implementation

const StoreContext = createContext({
  cart: [],
  user: {},

  addToCart: () => {},
  removeFromCart: () => {},
});

export default StoreContext;

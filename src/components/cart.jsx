import "./cart.css";
import { useContext } from "react";
import StoreContext from "./../store/storeContext";
import ProductInCart from "./productInCart";

const Cart = () => {
  const cart = useContext(StoreContext).cart;

  const getNumItems = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      sum += prod.quantity;
    }
    return sum;
  };

  const getTotal = () => {
    let total =0;
    for (let i = 0; i < cart.length; i++) {
        let prod = cart [i];
        total += prod.quantity * prod.price;
    }
    return total;
  }

  return (
    <div className="cart">
      <h1>Ready to checkout?</h1>
      <h5>We have {getNumItems()} items ready for you</h5>

      <div className="parent">
        <div className="products">
          {cart.map((prod) => (
            <ProductInCart key={prod._id} data={prod}></ProductInCart>
          ))}
        </div>

        <div className="side-menu">
          <h3>Your total is: {getTotal()}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;

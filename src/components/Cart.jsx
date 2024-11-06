import { useContext } from "react";

import CartContext from "../store/CartContext.jsx";
import currencyFormatter from "../util/formatting.js";

import Modal from "./UI/Modal.jsx";
import Button from "./UI/Button.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button>Close</Button>
        <Button>Go To Checkout</Button>
      </p>
    </Modal>
  );
}

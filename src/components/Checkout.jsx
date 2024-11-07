import { useContext } from "react";

import CartContext from "../store/CartContext";

import Modal from "./UI/Modal.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);

  // total price
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <Modal>
      <form action="">
        <h2>Checkout</h2>
        <p>Total Price: {cartTotal}</p>
      </form>
    </Modal>
  );
}

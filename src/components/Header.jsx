import { useContext } from "react";

import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

import logoImg from "../assets/logo.png";
import Button from "./UI/Button";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  // total quantity of items
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  // open Cart modal
  function handleShowCart() {
    userProgressCtx.showCart();
    console.log(userProgressCtx.progress);
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="pikachu" />
        <h1>Pokecard Online</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart}>Cart({totalCartItems})</Button>
      </nav>
    </header>
  );
}

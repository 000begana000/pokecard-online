import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

import Header from "./components/Header";
import Cards from "./components/Cards";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <>
      <CartContextProvider>
        <UserProgressContextProvider>
          <Header />
          <Cards />
          <Cart />
          <Checkout />
        </UserProgressContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;

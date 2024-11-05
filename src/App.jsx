import { CartContextProvider } from "./store/CartContext.jsx";

import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Cards />
      </CartContextProvider>
    </>
  );
}

export default App;

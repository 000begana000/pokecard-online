import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <CartContextProvider>
        <UserProgressContextProvider>
          <Header />
          <Cards />
        </UserProgressContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;

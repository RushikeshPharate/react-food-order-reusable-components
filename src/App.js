import {  useState } from "react";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import Header from "./components/UI/Header";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler=()=>{
    // console.log("yayy")
    setCartIsShown(true);
  };

  const hideCartHandler=()=>{
    console.log("yayy")
    setCartIsShown(false);
  };


  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

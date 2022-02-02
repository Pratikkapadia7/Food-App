import React,{ useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "../src/store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = (props)=>{
    setCartIsShown(()=> {return true});
  }
  const hideCartHandler = ()=>{
    setCartIsShown(()=> {return false});
  }
  let cartItems =[];
  const cartItemHandler =(items)=>{
    cartItems = [...items];
    setCartState(cartItems);
  }
  const [cartState, setCartState] = useState(cartItems);
  return (
    <CartProvider cartItem ={cartItemHandler}>
      {cartIsShown && <Cart onClose={hideCartHandler} items={cartState}/> }
      
      <Header onClickHandler={showCartHandler} items={cartState}/>
      <main>
        <Meals/>
      </main>
      
    </CartProvider>
  );
}

export default App;

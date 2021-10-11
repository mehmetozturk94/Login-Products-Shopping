import { useState } from "react";
import Cart from "../../components/Cart/Cart";
import CartProvider from "../../store/CartProvider";
import MainNavigation from "../../components/Layout/MainNavigation";

function Layout(props)  {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <MainNavigation onShowCart={showCartHandler} />
        <main>{props.children}</main>
    </CartProvider>
  );
};

export default Layout;

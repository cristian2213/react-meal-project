import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighLightead] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  // const { items, totalAmount, addItem, removeItem } = cartCtx;
  const numberOfCartItems = items.reduce((preValue, cuValue) => {
    return preValue + cuValue.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) return;

    setBtnIsHighLightead(true);

    const timer = setTimeout(() => {
      setBtnIsHighLightead(false);
    }, 300);

    // It's executed by second time, and it runs after above code
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

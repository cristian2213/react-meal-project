// import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Input from '../../UI/Input';
// import CartContext from '../../store/cart-context';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInput = useRef(); // undefined by default

  const submitHandler = (event) => {
    event.preventDefault();
    // amountInput.current.focus() // it works
    const enteredAmount = amountInput.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInput}
        label='Amount'
        input={{
          id: Date.now(),
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

// MealItemForm.propTypes = {};

export default MealItemForm;

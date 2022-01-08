import { forwardRef } from 'react';
import classes from './Input.module.css';
import PropTypes from 'prop-types';

// For using ref in a custom component
const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* type: 'text', defaultValue: '1' */}
      <input id={props.input.id} {...props.input} ref={ref} />
      {/* This is the reference that I am delivering of the main element */}
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
};

export default Input;

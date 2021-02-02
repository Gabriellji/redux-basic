import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({ type: "INCREMENT" }),
  onDecrement: () => dispatch({ type: "DECREMENT" }),
  onIncrementByTen: () => dispatch({ type: "INCREMENT_BY_TEN" }),
  onDecrementByTen: () => dispatch({ type: "DECREMENT_BY_TEN" }),
  onReset: () => dispatch({ type: "RESET" }),
});

const CounterComponent = ({
  counter,
  onIncrement,
  onDecrement,
  onIncrementByTen,
  onDecrementByTen,
  onReset,
}) => (
  <div>
    <p>{counter}</p>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
    <button onClick={onIncrementByTen}>Increment + 10</button>
    <button onClick={onDecrementByTen}>Decrement - 10</button>
    <button onClick={onReset}>Reset</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

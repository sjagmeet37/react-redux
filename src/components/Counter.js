import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};


  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrementHandler = () => {
    dispatch({type : 'increment'});
  }

  const onIncreaseHandler = () => {
    dispatch({type : 'increase', amount : 5});
  }

  const onDecrementHandler = () => {
    dispatch({type : 'decrement'});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={onIncrementHandler}>Increment</button>
        <button onClick={onIncreaseHandler}>Increment By 5</button>
        <button onClick={onDecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

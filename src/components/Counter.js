import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/app-store";

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };


  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const onIncrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const onIncreaseHandler = () => {
    dispatch(counterActions.incrementFlex(5));
  }

  const onDecrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div> }
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

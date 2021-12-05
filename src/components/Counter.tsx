import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  selectCount
} from "../../src/feature/counter/counterSlice";
const Counter = () => {
  const value = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>
          <b>+</b>Increment
        </button>
        <span style={{ padding: "16px" }}>
          <b>{value}</b>
        </span>
        <button onClick={() => dispatch(decrement())}>
          <b>-</b>Decrement
        </button>
      </div>
    </div>
  );
};
export default Counter;

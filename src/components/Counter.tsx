import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  increamentByAmount,
  increamentByAmountAsync,
  selectCount
} from "../../src/feature/counter/counterSlice";
const Counter = () => {
  const [amount, setAmount] = useState("2");
  const value = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          placeholder="Enter the amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <button
          onClick={() => dispatch(increamentByAmount(Number(amount) || 0))}
        >
          <b>+</b>increamentByAmount
        </button>
        <button
          onClick={() => dispatch(increamentByAmountAsync(Number(amount) || 0))}
        >
          <b>+</b>increamentByAmountAsync
        </button>
        <br />
        <br />
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

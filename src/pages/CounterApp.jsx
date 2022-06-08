import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterDec, counterInc } from "../store/action";

const CounterApp = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const count = state.counter.count;

  return (
    <div>
      CounterApp
      <h1> count : {count}</h1>
      <button
        onClick={() => {
          dispatch(counterDec());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(counterInc());
        }}
      >
        +
      </button>
    </div>
  );
};

export default CounterApp;

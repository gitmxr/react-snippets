import React, { use } from "react";
import { useContext } from "react";
import { CounterContext } from "../context/counterContext";

export const Counter = () => {
  const context = useContext(CounterContext);
  console.log("context", context);

  return (
    <div>
      <button onClick={() => context.setCount(context.count + 1)}>
        Increment
      </button>
      <button onClick={() => context.setCount(context.count - 1)}>
        decrements
      </button>
    </div>
  );
};

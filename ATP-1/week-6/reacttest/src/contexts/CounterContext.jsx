import { createContext, useState } from "react";

// Create the Counter Context
const CounterContext = createContext();

// Counter Provider Component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const value = {
    count,
    increment,
    decrement,
    reset
  };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext };
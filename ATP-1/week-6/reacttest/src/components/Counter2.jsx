import { useCounter } from "../hooks/useCounter";

function Counter2() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-500">
      <h2 className="text-2xl font-bold text-center mb-4">EditCounter2</h2>
      <div className="text-2xl font-bold text-center text-blue-600 mb-6">
        {count}
      </div>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          -
        </button>
        <button
          onClick={increment}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter2;

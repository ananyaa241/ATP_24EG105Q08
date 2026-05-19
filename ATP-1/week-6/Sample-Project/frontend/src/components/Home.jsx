import { useContext } from "react"
import { counterContextObj } from "../contexts/CounterContext" 
import { useCounterStore } from "../store/CounterStore"

function Home() {
  //call useCounterStore hook to get state of zustand store
  let newCounter=useCounterStore((state)=>state.newCounter);
  let incrementCounter=useCounterStore((state)=>state.incrementCounter);

  const  { counter, changeCounter} = useContext(counterContextObj);
  console.log("Home");
  return (
    <div>
      <h1 className="text-5xl text-center text-black">Counter</h1>
      <button onClick={changeCounter} className="text-2xl rounded-2xl bg-yellow-400 text-black block mx-auto p-4 mt-5">
        Change Counter
      </button>
      <h1 className="text-3xl text-center text-black mt-5">{newCounter}</h1>
      <button onClick={incrementCounter} className="text-2xl rounded-2xl bg-green-400 text-black block mx-auto p-4 mt-5">
        Increment Counter
      </button>
    </div>
  )
}

export default Home
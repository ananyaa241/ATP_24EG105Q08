import {useState} from 'react'
function Counter()
{    //state
        const [count,setCount]=useState(0);
        //functions to modify the state
  
        const increment=()=>{
            setCount(count+1);
         
        };
        const decrement=()=>{
            setCount(count-1);
        };
        console.log("counter component")
        return (
        <div className="text-center p-10 border">
            <h1 classname="text-6xl">Count:{count}</h1>
            <button className="bg-green-600 rounded-2xl gap-5  mx-0.5 my-0.5" onClick={increment}>+</button>
            <button className="bg-red-600 rounded-2xl  mx-0.5 my-0.5" onClick={decrement}>-</button>
            </div>
 );
}
export default Counter;
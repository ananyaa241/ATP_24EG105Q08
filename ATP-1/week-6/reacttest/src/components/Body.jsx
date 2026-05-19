import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";
import Counter4 from "./Counter4";

function Body(){
   return (
    <div className="min-h-screen bg-pink-500 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        App
      </h1>
      
      {/* 2x2 Grid Layout with nested Counter components */}
      <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Counter1/>
        <Counter2/>
        <Counter3/>
        <Counter4/>
      </div>
    </div>
  );
}

export default Body;


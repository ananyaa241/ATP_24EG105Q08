import { useState } from "react";

function TestType() {
  // state
  const [user, setUser] = useState({
    UserName: "ravi",
    age: 19,
    city: "hyd",
  });

  const [marks, setMarks] = useState([10, 20, 30]);

  // update user state
  const updateuser = () => {
    setUser({ ...user, UserName: "raju", age: 23 });
  };

  // update marks state
  const updateMarks = () => {
    setMarks([...marks, 40]);
  };

  return (
    <div>
      <p className="text-4xl">UserName: {user.UserName}</p>
      <p className="text-4xl">Age: {user.age}</p>
      <p className="text-4xl">City: {user.city}</p>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={updateuser}
      >
        Update User
      </button>

      <p className="text-4xl">Marks: {marks.join(", ")}</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={updateMarks}
      >
        Update Marks
      </button>
    </div>
  );
}

export default TestType;
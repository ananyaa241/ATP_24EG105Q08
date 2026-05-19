import { useState, useEffect } from "react";

function APIDemo() {
  console.log("API demo rendered");
let [users,setUsers]=useState([]);
let [loading,setLoading]=useState(false);
let [error,setError]=useState(null);
  
  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/comments");
        let usersList = await res.json();
        setUsers(usersList);
      } catch (err) {
        console.log("err is ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);
if(loading){
    return <p className="text-center text-5xl">Loading...</p>
}
if(error!==null){
    return <p className="text-center text-red-500 text-5xl">{error.message}</p>
}
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl bg-blue-600 text-white p-4">
        List of Users
      </h1>

      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {users.map((user) => (
          <div key={user.id} className="p-5 border rounded">
            <h2 className="text-xl">{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default APIDemo;
import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {

  const [users, setUsers] = useState([]);

  const addUser = (userObj) => {
    setUsers([...users, userObj]);
  };

  return (
    <div className="p-10">

      <UserForm addUser={addUser} />

      <UserList users={users} />

    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function Users({addUser}){

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data.slice(0,4)));
    },[]);

    return(

        <div className="row">

            {
                users.map((user)=>(
                    <UserCard key={user.id} user={user} addUser={addUser}/>
                ))
            }

        </div>

    )
}

export default Users;
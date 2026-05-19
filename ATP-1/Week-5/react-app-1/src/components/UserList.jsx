import UserCard from "./UserCard";

function UserList({ users }) {

  return (
    <div className="mt-10">

      <h2 className="text-3xl text-center mb-5">Users List</h2>

      {users.length === 0 ? (
        <p className="text-center">No users added yet</p>
      ) : (
        users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))
      )}

    </div>
  );
}

export default UserList;
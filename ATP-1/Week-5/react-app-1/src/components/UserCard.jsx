function UserCard({ user }) {

  return (
    <div className="border p-4 mb-3 max-w-md mx-auto">

      <p><b>Name:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>DOB:</b> {user.dob}</p>

    </div>
  );
}

export default UserCard;
import { useState } from "react";

function UserForm({ addUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !dob) return;

    addUser({ username, email, dob });
    setUsername("");
    setEmail("");
    setDob("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add User</h2>

      <label className="block mb-3">
        <span className="block text-sm font-medium mb-1">Name</span>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="w-full rounded border px-3 py-2"
          placeholder="Enter name"
        />
      </label>

      <label className="block mb-3">
        <span className="block text-sm font-medium mb-1">Email</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded border px-3 py-2"
          placeholder="Enter email"
        />
      </label>

      <label className="block mb-4">
        <span className="block text-sm font-medium mb-1">Date of birth</span>
        <input
          type="date"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
          className="w-full rounded border px-3 py-2"
        />
      </label>

      <button
        type="submit"
        className="w-full rounded bg-blue-600 text-white py-2 hover:bg-blue-700"
      >
        Add User
      </button>
    </form>
  );
}

export default UserForm;

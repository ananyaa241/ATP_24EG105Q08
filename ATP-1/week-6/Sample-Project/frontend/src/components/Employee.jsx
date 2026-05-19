
import { useLocation, useNavigate } from "react-router-dom";

function Employee() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-3xl font-semibold">No employee selected</h2>
        <p className="mt-4 text-gray-600">Go back and select an employee to view details.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-2 bg-yellow-400 rounded-lg text-black font-medium"
        >
          Go Back
        </button>
      </div>
    );
  }

  const initials = state.name
    ? state.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "EE";

  return (
    <div className="app-container">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-extrabold">Employee Details</h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm"
        >
          ← Back
        </button>
      </div>

      <div className="bg-yellow-200 rounded-3xl shadow-2xl p-8 flex flex-col sm:flex-row gap-6 items-center">
        <div className="flex-shrink-0">
          <div className="w-28 h-28 rounded-full bg-yellow-300 flex items-center justify-center text-4xl font-bold text-white shadow-md">
            {initials}
          </div>
          <p className="text-sm text-gray-600 mt-3 text-center">Employee ID: <span className="font-mono text-xs">{state._id || '—'}</span></p>
        </div>

        <div className="flex-1 w-full">
          <h2 className="text-2xl font-semibold text-gray-800">{state.name}</h2>
          <p className="text-sm text-gray-500 mt-1">{state.designation} at <span className="font-medium text-gray-700">{state.companyName}</span></p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm break-words max-w-full">
              <p className="text-xs text-gray-400">Email</p>
              <p className="text-base font-medium text-gray-800 break-words truncate max-w-full">{state.email}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-xs text-gray-400">Mobile</p>
              <p className="text-base font-medium text-gray-800">{state.mobile || 'N/A'}</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => navigate('/edit-emp', { state })}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium"
            >
              Edit
            </button>
            <button
              onClick={() => navigate('/list')}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium"
            >
              Back to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee

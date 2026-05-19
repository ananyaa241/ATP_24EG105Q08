import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiEndpoints } from "../config/apiConfig";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee=(empObj)=>{
    //navigate to /employee
    navigate("/employee",{state:empObj});
  };

  const gotoEditEmployee=(empObj)=>{
    //navigate to /edit-employee along with selected emp object
   navigate("/edit-emp",{state:empObj});
  }
  const deleteEmpById=async(id)=>{
    let res=await fetch(`${apiEndpoints.employees}/${id}`,{
      method: 'DELETE'
    });
    if(res.status===200){
      //refresh the list of employees
      getEmps();
    }
  }
  //get all emps from backend
  async function getEmps() {
      let res = await axios.get(apiEndpoints.employees);
      if (res.status === 200) {
        let resObj = res.data;
        setEmps(resObj.payload);
      }
    }
  useEffect(() =>{
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
        {emps.map((empObj) => (
          <div key={empObj._id} className="bg-yellow-200 pt-8 pb-8 px-6 sm:px-8 rounded-3xl shadow-lg text-center flex flex-col items-center gap-4 overflow-hidden min-h-[18rem] w-80 sm:w-96">
            <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold text-white shadow-md">
              {(empObj.name||"").split(" ").map(n=>n[0]).slice(0,2).join("").toUpperCase()}
            </div>

            <p className="text-sm text-gray-600 break-words max-w-[14rem] text-center whitespace-normal truncate">{empObj.email}</p>
            <p className="text-lg font-semibold text-gray-800">{empObj.name}</p>

            <div className="flex items-center gap-3 mt-2 flex-nowrap">
              <button onClick={() => gotoEmployee(empObj)} className="bg-green-500 text-white px-3 py-2 text-sm rounded-full shadow-sm hover:bg-green-600">View</button>
              <button onClick={()=>gotoEditEmployee(empObj)} className="bg-yellow-400 text-black px-3 py-2 text-sm rounded-full shadow-sm hover:bg-yellow-500">Edit</button>
              <button onClick={()=>deleteEmpById(empObj._id)} className="bg-red-500 text-white px-3 py-2 text-sm rounded-full shadow-sm hover:bg-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;
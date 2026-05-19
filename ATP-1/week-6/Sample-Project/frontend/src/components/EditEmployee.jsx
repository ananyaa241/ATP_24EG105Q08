import {useForm} from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"
import { apiEndpoints } from "../config/apiConfig";

function EditEmployee() {
 const {
    register,
    handleSubmit,
    setValue,
  } = useForm();
  const navigate=useNavigate();

  const saveModifiedEmp = async (modifiedEmp) => {
    console.log(modifiedEmp);
    // Add your API call or form submission logic here
    //make http put req
    const res=await axios.put(`${apiEndpoints.employees}/${state._id}`,modifiedEmp);
    if(res.status===200){
      //navigate to list of emps
      navigate("/list");
    }
    };

  //get empObj from navigate hook
  const {state} = useLocation();

  useEffect(()=>{
    if(state){
      setValue("name",state.name);
      setValue("email",state.email);
      setValue("mobile",state.mobile);
      setValue("designation",state.designation);
      setValue("companyName",state.companyName);
    }
  },[state, setValue]);

  return (
    <div className="app-container">
      <h1 className="text-4xl text-white font-bold text-center">Edit Employee</h1>
      <div className="max-w-lg mx-auto mt-8 bg-white/90 p-6 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit(saveModifiedEmp)}>
          <input
            type="text"
            placeholder="Enter name"
            {...register("name")}
            className="mb-3 border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
            className="mb-3 border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <input
            type="number"
            placeholder="Enter mobile number"
            {...register("mobile")}
            className="mb-3 border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="text"
            placeholder="Enter designation"
            {...register("designation")}
            className="mb-3 border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="text"
            placeholder="Enter name of the company"
            {...register("companyName")}
            className="mb-3 border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <div className="text-center">
            <button type="submit" className="mt-2 px-6 py-2 bg-green-600 text-white rounded-full shadow-md">
             Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditEmployee
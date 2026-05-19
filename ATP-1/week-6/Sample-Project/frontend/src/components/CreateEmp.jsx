import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiEndpoints } from "../config/apiConfig";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  //form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      //make HTTP POST req
      let res = await fetch(apiEndpoints.employees, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });

      if (res.status === 201) {
        //navigate to employees component programatically
        navigate("/list");
      } else {
        let errorRes = await res.json();
        console.log("error responce is ", errorRes);
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(error);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div className="app-container">
      <h1 className="text-4xl text-center text-white font-bold">Create New Employee</h1>
      <div className="max-w-lg mx-auto mt-8 bg-white/90 p-6 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit(onFormSubmit)}>
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
            <button type="submit" className="mt-2 btn-primary w-40">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEmp;
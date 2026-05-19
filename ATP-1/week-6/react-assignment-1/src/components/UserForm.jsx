import { useForm} from "react-hook-form";
import {useState} from "react";
function UserForm(){
    const { register,//to register form fields
         handleSubmit,//to handle for submission
         formState:{errors},//to handle validations
         } = useForm();
    const [users,setUsers] = useState([]);
    const onFormSubmit = (obj) => {
    setUsers((prev) => [...prev, obj]);
  };
    return(
        <div>
            <h1 className="text-center text-5xl">User Form </h1>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="FirstName" >FirstName</label>
                    <input type="text" {...register("FirstName",{
                        required:"FirstName required",
                        validate:(v)=>v.trim().length!==0||"Length must be greater than 0",
                        minLength:4,
                        maxLength:15
                    })} id="FirstName" className="border w-full p-3"/>
                    {errors.FirstName?.type==="required"&&<p className="text-red-600">{errors.FirstName.message}</p>}
                    {errors.FirstName?.type==="minLength"&&<p className="text-red-500">Length should be atleast 4 characters</p>}
                    {errors.FirstName?.type==="maxLength"&&<p className="text-red-500">Maximum length should be atleast 15 characters</p>}
                    {errors.FirstName?.type==="validate"&&<p className="text-red-500">{errors.FirstName.message}</p>}

                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" >Email</label>
                    <input type="email" {...register("email",{
                        required:"Email required"
                    })} id="email" className="border w-full p-3"/>
                    {errors.email?.type==="required"&&<p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="dateOfBirth" >Date of Birth</label>
                    <input type="date" {...register("dateOfBirth",{
                        required:"Date of Birth required"                        
                    })}id="dateOfBirth" className="border w-full p-3"/>
                    {errors.dateOfBirth?.type==="required"&&<p className="text-red-500">{errors.dateOfBirth.message}</p>}
                </div>
                <button type="submit" className="bg-red-500 block mx-auto p-3 rounded-2xl">Add User</button>
            </form>
        <table className="table-auto border-collapse  mt-10">
        <thead>
          <tr className="bg-gray-500">
            <th className="border p-2">First Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Dateof Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border p-2">{user.FirstName}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
}
export default UserForm;
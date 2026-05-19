import { useForm } from "react-hook-form";
function FormDemo(){
    const { register,//to regsiter form fields
         handleSubmit,//to handle for submission
         formState:{errors},//to handle validations
         } = useForm();
    const onFormSubmit=(obj)=>{
        console.log(obj);
    };
    return(
        <div>
            <h1 className="text-center text-5xl">Form Demo</h1>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="username" >Username</label>
                    <input type="text" {...register("username",{
                        required:"Username required",
                        validate:(v)=>v.trim().length!==0||"Length must be greater than 0",
                        maxLength:20

                        //minLength:4
                    })} id="username" className="border w-full p-3"/>
                    {errors.username?.type==="required"&&<p className="text-red-600">{errors.username.message}</p>}
                    {errors.username?.type==="minLength"&&<p className="text-red-500">{errors.username.message}</p>}
                    {errors.username?.type==="maxLength"&&<p className="text-red-500">{errors.username.message}</p>}
                    {errors.username?.type==="validate"&&<p className="text-red-500">{errors.username.message}</p>}

                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" >Email</label>
                    <input type="email" {...register("email",{
                        required:"Email required"
                    })} id="email" className="border w-full p-3"/>
                </div>
                <button type="submit" className="bg-yellow-500 block">Submit</button>
            </form>
        </div>
    )
}
export default FormDemo;
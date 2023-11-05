import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
const LogIn = () =>{
    const { LogInUser,LogInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
 
     const handleLoginUser = e =>{
         e.preventDefault();
         const email = e.target.email.value;
         const password = e.target.password.value;
 
         LogInUser(email,password)
         .then(res=>{
             swal("Good job!", "Successfully Logged In", "success")
             e.target.reset()
             navigate('/');
         })
         .catch(err=>{
             swal("error", `${err.message}`, "error");
         })
 
     }
 
     const handleGoogleLogin = () =>{
         LogInWithGoogle()
         .then(res=>{
             swal("Good job!", "Successfully Logged In", "success")
             navigate('/');
         })
         .catch(err=>{
             swal("error", `${err.message}`, "error");
         })
     }
 
    return (
        <div className="w-[1450px] mx-auto flex justify-center gap-20 pb-[220px]">
            <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none   pt-10 ">
                <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-400 antialiased">
                    Log In
                </h4>
                <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Enter your details to Log in.
                </p>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleLoginUser}>
                    <div className="mb-4 flex flex-col gap-6">
                  
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                type="email"
                                name="email"
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeHolder=" "
                                required
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                type='password'
                                name="password"
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeHolder=" "
                                required
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                    </div>
                    <div className="inline-flex items-center">
                       
                    
                    </div><br />

                    <input className="border px-[172px] py-[7px] rounded-md bg-blue-400 text-white font-bold" type="submit" value='Login'></input>

                    <p className="mt-4 text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased flex justify-center">
                       Create new account ?

                       <Link to='/register'>
                           <p className="font-medium text-blue-400 transition-colors hover:text-blue-700">Register</p>
                       </Link>

                    </p>
                </form>
            </div>

            <div className="pt-10 flex items-center text-5xl font-bold text-blue-400">OR</div>
            <div onClick={handleGoogleLogin} className="pt-10 flex items-center text-3xl font-bold"><div className="flex gap-2 items-center"><FcGoogle></FcGoogle><p> <span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span></p></div></div>
        </div>
    )
}
export default LogIn;
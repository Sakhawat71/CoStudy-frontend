import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "../../firebase/firebase.config";


const Login = () => {

    console.log(auth)
    // const location = useLocation()
    // const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    // const [firebaseError, setFirebaseError] = useState([]);

    // const handelLogIn = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password)


    //     loginEmailPass(email, password)
    //         .then(() => {
    //             // const user = result.user;
    //             navigate(location?.state ? location.state : "/")
    //             // console.log(user)
    //         })
    //         .catch(error => {
    //             // console.log(error.message)
    //             setFirebaseError(getCustomErrorMessage(error))
    //         })

    //     form.reset();
    // }
    // const getCustomErrorMessage = (error) => {
    //     switch (error.message) {
    //         case "auth/invalid-login-credentials":
    //             return "Incorrect email/password.Please try again.";
    //         default:
    //             return error.message;
    //     }
    // };
    
    const handelLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email,password})
    }


    return (


        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>


                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body  lg:w-[400px]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>


                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-12 right-4 text-xl">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>

                            <label className="label">
                                <Link
                                    href="#"
                                    className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <span className="text-red-700">
                            {
                                // firebaseError
                            }
                        </span>

                        <div className="form-control mt-6 mb-2">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <p className="font-semibold text-center">Don`t have an account? <Link to="/register">
                            <button className="btn btn-sm ml-1 text-blue-700">Register</button>
                        </Link> </p>

                    </form>

                </div>
            </div>
        </div>

    );
};

export default Login;
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {  updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {

    const { emailPasswordSignUp, googleSignIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handelRegister = e => {

        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ name, photo, email, password })

        // sign up with email password
        emailPasswordSignUp(email, password)
            .then(result => {

                const currentUser = result.user;
                
                updateProfile(currentUser, {
                    displayName: name,
                    photoURL: photo,
                })
                .then(()=>{
                    navigate('/')
                })
                .catch(error => {
                    console.log("profile update porblem")
                    console.log(error)
                })
            })
            .catch(error => {
                console.log(error.code, error.message)
            })
    }

    const signInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                if (result) {
                    console.log('user login with google')
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error.code, error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>

                <div className="text-center p-2 mb-2 mx-auto card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <Link onClick={signInWithGoogle} className="btn">Continue with Google <FcGoogle className="text-2xl" /></Link>
                </div>
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">

                    <form onSubmit={handelRegister} className="card-body lg:w-[450px]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Photo Url</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo Url"
                                className="input input-bordered"
                            />
                        </div>

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
                                className="input input-bordered "
                                required />

                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-12 right-6 text-xl">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }</span>


                            <span className="text-red-700 mt-5">
                                {
                                    // error
                                }
                                {
                                    // firebaseError
                                }
                            </span>
                        </div>

                        <input
                            type="submit"
                            value="Register"
                            className="btn text-white mt-5 bg-sky-500 text-[16px]"
                        />

                        <p className="font-semibold text-center">Already have an account?
                            <Link to="/login">
                                <button className="btn btn-sm ml-1 text-blue-700">Login</button>
                            </Link> </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
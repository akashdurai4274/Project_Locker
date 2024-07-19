// src/pages/Login.jsx
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Iconcomponents from "./Iconcomponents";

const Login = () => {
  const navigate = useNavigate();
  const { login, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signup(email, password, name);
        /* toast.success("Account created successfully!", { autoClose: 3000 }); */
        navigate("/");
        // Set duration here
      } else {
        await login(email, password);
        /* toast.success("Logged in successfully!", { autoClose: 3000 }); */
        navigate("/main"); // Set duration here
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred", {
        autoClose: 3000,
      }); // Set duration here
    }
  };

  return (
    <div className="flex mx-40 rounded-2xl bg-violet-200 bg-opacity-55">
      <div className="h-[500px] m-5">
        <img className="h-[500px] w-[750px] rounded-3xl" src="ems.jpg" alt="" />
      </div>
      <div className="w-11/12 p-6 max-w-[400px] mt-10 flex-col">
        <div className="flex items-center justify-center ">
          <span className="text-3xl text-center font-curs">Get Started</span>
        </div>
        <form onSubmit={handleSubmit} className="">
          {/* <h2 className="mb-4 text-2xl">{isSignUp ? "Sign Up" : "Login"}</h2> */}
          <div className="flex mt-5 mb-2">
            {/* <label className="block mb-2">Email</label> */}
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[300px] h-[50px] bg-gray-100 rounded-lg mx-auto p-2 border-2 border-white  icon-input focus:outline-none focus:shadow-outline opacity-50"
              placeholder="Email"
            />
          </div>
          {isSignUp && (
            <div className="flex mb-2">
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-[300px] h-[50px] icon3-input rounded-lg focus:outline-none  border-2 border-white focus:shadow-outline opacity-50 p-2 mx-auto border focus:outline-none focus:shadow-outline bg-gray-100"
              />
            </div>
          )}
          <div className="flex mb-2">
            {/* <label className="block mb-2">Password</label> */}
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-[300px] h-[50px] mx-auto rounded-lg p-2 border icon2-input focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-black rounded-lg w-[300px] h-[50px]"
            >
              {isSignUp ? "Sign Up" : "Login"}
            </button>
            {/* <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="px-4 py-2 text-white bg-blue-500 rounded"
            >
              {isSignUp ? "Already have an account?" : "Create an account"}
            </button> */}
          </div>
          <a className="flex justify-end mt-4 w-[320px]  cursor-pointer italic">
            {!isSignUp ? "Forgot password ?" : " "}
          </a>
          <span className="flex justify-center mt-3 italic font-thin font-curs indent-2">
            or <span className="font-bold font-curs "> Continue </span> with
          </span>
          <Iconcomponents />
          <span className="flex justify-center mt-4">
            {isSignUp
              ? "Already have an account?"
              : "Dont have an account yet?"}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="italic text-blue-500 cursor-pointer font-curs indent-2"
            >
              {isSignUp
                ? "login"
                : "Signup"}
            </button>
          </span>
        </form>
        <ToastContainer autoClose={1000} />{" "}
      </div>
    </div>
  );
};

export default Login;

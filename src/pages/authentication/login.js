import React, { useState } from "react";
import { SmileTwoTone } from "@ant-design/icons";
import { Spin, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email and password exist
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      // Send a POST request to your server's login endpoint with user credentials
      const response = await axios.post("http://localhost:5000/users/api/v1/beta/login", {email,password});

      // Check if the login was successful
      if (response.data && response.data.success) {
        // Redirect or perform other actions upon successful login
        navigate("/dashboard");
        console.log("Login successful");
        return; // Stop further execution  
      } else {
        // Handle unsuccessful login (show an error message, etc.)
        console.error("Login failed");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("An error occurred during login", error);
    }

    setLoading(true);
    // Simulate asynchronous operation (e.g., API request)
  };

  return (
    <div className="md:flex md:justify-center md:pt-10 md:pl-20 md:pr-20 p-5">
      <div className="">
        <div className="text-2xl opacity-75">Affiliate Solutions</div>
        <div className="md:text-3xl text-2xl font-normal mt-5 md:w-96">
          Continue to your Account.
        </div>
        <div
          style={{ backgroundColor: "#E3F3FB" }}
          className="h-12 md:w-96 rounded-full text-center flex items-center justify-center font-light mt-5 space-x-3"
        >
          <div>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
          </div>
          <div>Log in with Google</div>
        </div>
        <div className="md:w-96 mt-5">
          <Input
            className="h-10"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            className="h-10 mt-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div
          className={`mt-2 cursor-pointer h-10 text-sm uppercase md:w-96 bg-black rounded-md text-white flex justify-center items-center font-medium ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={!loading ? handleSubmit : null}
        >
          {loading ? (
            <Spin indicator={<SmileTwoTone spin />} />
          ) : (
            "START MY FREE TRIAL"
          )}
        </div>
        
        <div className="mt-5 text-center md:w-96">
          <span className="opacity-80">Are you a Newbie?</span>{" "}
          <span className="text-blue-600 underline-offset-1">GET STARTED - IT'S FREE</span>
        </div>
      </div>
    </div>
  );
};

export default Login;

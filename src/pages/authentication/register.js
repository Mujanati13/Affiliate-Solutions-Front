import React, { useState } from "react";
import { SmileTwoTone } from "@ant-design/icons";
import { Spin, Input } from "antd";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleFirstnameChange = (e) => {
        setFirstname(e.target.value);
      };

    const handleLastnameChange = (e) => {
    setLastname(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate asynchronous operation (e.g., API request)
      };

    return (
    <div className="md:flex md:justify-center md:pt-10 md:pl-20 md:pr-20 p-5">
        <div className="">
        <div className="text-2xl opacity-75">Affiliate Solutions</div>
        <div className="md:text-3xl text-2xl font-normal mt-5 md:w-96">
            Start Your 600-Day Free Trial Today
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
            <div>Sign up with Google</div>
        </div>
        <div className="md:w-96 mt-5">
            <Input
            className="h-10"
            placeholder="First Name"
            value={firstname}
            onChange={handleFirstnameChange}
            />
            <Input
            className="h-10 mt-2"
            placeholder="Last Name"
            value={lastname}
            onChange={handleLastnameChange}
            />
            <Input
            className="h-10 mt-2"
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
        <div className="text-xs opacity-80 mt-5 md:w-96">
            By Signing up to uBrand, means you agree to our Privacy Policy and
            Terms of Service
        </div>
        <div className="mt-5 text-center md:w-96">
            <span className="opacity-80">Already a Member? </span>{" "}
            <span className="text-blue-600 underline-offset-1">LOG IN</span>
        </div>
        </div>
    </div>
    );
};

export default Register;

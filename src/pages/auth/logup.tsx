import React, { useState } from "react";
import { SmileTwoTone } from "@ant-design/icons";
import { Spin, Input } from "antd";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if email and password exist
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    setLoading(true);
    // Simulate asynchronous operation (e.g., API request)
  };

  return (
    <div className="md:flex md:justify-center md:pt-10 md:pl-20 md:pr-20 p-5">
      <div className="">
        <div className="text-xl text-black opacity-75 mt-10 font-medium">
          Create a new account
        </div>
        <form onSubmit={handleSubmit} className="md:w-96 mt-10">
          <Input
            className="h-10"
            placeholder="Full Name"
            value={email}
            onChange={handleEmailChange}
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
          <button
            type="submit"
            className={`capitalize mt-2 cursor-pointer h-10 text-sm md:w-96 bg-black rounded-md text-white flex justify-center items-center font-medium ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? <Spin indicator={<SmileTwoTone spin />} /> : "Registe"}
          </button>
        </form>
        <div
          style={{ backgroundColor: "#E3F3FB" }}
          className="text-gray-500 mt-5 h-10 md:w-96 rounded-md font-medium text-center flex items-center justify-center space-x-3"
        >
          <div>
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
          </div>
          <div>Sign up with Google</div>
        </div>
        <div className="text-xs opacity-80 mt-5 md:w-96 text-center">
          By Signing up to BubbleConnect, means you agree to our Privacy Policy
          and Terms of Service
        </div>
        <div className="mt-5 text-center md:w-96">
          <span className="opacity-80 text-sm">Already a Member? </span>{" "}
          <span className="text-blue-600 underline-offset-1 text-sm">
            login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

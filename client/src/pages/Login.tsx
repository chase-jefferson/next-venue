<<<<<<< HEAD
import React from "react";

const Login: React.FC = () => {
  return (
    <div>
      <h1>Login Page</h1>
      {/* Add your login form here */}
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      // ✅ Prevent JSON parsing error if response is empty
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Store JWT token securely (consider HttpOnly cookies for better security)
      localStorage.setItem("token", data.token);

      // ✅ Redirect to dashboard after successful login
      navigate("/dashboard");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>

      {error && (
        <p className="text-red-600 text-center mb-4 p-2 border border-red-500 rounded bg-red-100">
          {error}
        </p>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </div>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-500 hover:text-blue-700 font-semibold focus:outline-none"
          >
            Register here
          </button>
        </p>
      </div>
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
    </div>
  );
};

export default Login;
<<<<<<< HEAD
=======


>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  // Example local login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // call your local login endpoint, for example:
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      toast.success("Login successful")
      console.log("Local login response:", response.data);
      navigate("/account");
    } catch (err) {
      toast.error("Invalid email or password" + err.message)
    }
  };

  // Google success callback
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      // "credential" is the Google ID token
      const idToken = credentialResponse.credential;

      // POST to your Node backend
      const response = await axios.post("http://localhost:3000/google-login", {
        id_token: idToken,
      });
      console.log("Google Login response:", response.data);

      // Extract any data you want to store
      const {
        email,
        username,
        role,
        user_id,
        is_Verified,
        token
      } = response.data;

      // Store in localStorage for example
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);
      localStorage.setItem("user_id", user_id);
      localStorage.setItem("is_Verified", is_Verified);

      // Navigate based on role
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/account");
      }
    } catch (err) {
      console.error(err);
      setError("Google login failed. Please try again.");
    }
  };

  // Google error callback
  const handleGoogleLoginError = () => {
    setError("Google login failed. Please try again.");
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-700">Login</h2>
      <p className="text-gray-500 mb-4">Welcome back! Please login to your account.</p>

      {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}

      <form className="space-y-4" onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full py-2 mt-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div>
          {/* The Google Login button from @react-oauth/google */}
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
        </div>
      </div>

      <p className="mt-4 text-sm">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-600 font-semibold hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;

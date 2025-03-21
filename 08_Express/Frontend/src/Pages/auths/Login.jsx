import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../services/loginServices";
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password, navigate);
    } catch (err) {
      setError("Invalid email or password");
      console.log(err.message);
    }
  };
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      // credentialResponse.credential is the Google ID token
      const idToken = credentialResponse.credential;

      // Send ID token to your backend for verification
      const response = await axios.post(
        "http://localhost:3000/google-login",
        { id_token: idToken }
      );
      console.log("Google Login response:", response.data);

      // Your backend should return tokens & user info
      const { role, user_id, email, first_name, last_name } = response.data;

      // Store tokens/user data as desired. Here, we set "username" for Navbar.
      localStorage.setItem('token', response.data.token)
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('role', response.data.role)
        localStorage.setItem('user_id', response.data.user_id)
        localStorage.setItem("is_Verified", response.data.is_Verified)

      // Set username (for example, use first_name or a combination)
      const username = first_name || email;
      localStorage.setItem("username", username);

      // Redirect based on role
      if(response.data.role === "admin"){
        navigate('/admin')
        }else{
            navigate('/account')
        }
    } catch (err) {
      console.error(err);
      setError("Google login failed. Please try again.");
    }
  };

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
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        
        <button
          type="submit"
          className="w-full py-2 mt-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
      <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginError}
              />
              </div>
            </div>

      <p className="mt-4 text-sm">
        {`Don't have an account?`}
        <Link to="/register" className="text-blue-600 font-semibold hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;

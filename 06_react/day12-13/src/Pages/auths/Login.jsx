import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../services/loginServices";

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

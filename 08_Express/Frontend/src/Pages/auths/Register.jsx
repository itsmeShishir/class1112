import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import register from "../../services/Registerservice";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confiermPassword, setconfiermPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();
    try{
      let response = await axios.post("http://localhost:3000/register", 
      {
      email: email,
      password: password,   
      username: username,
      confiermPassword: confiermPassword,
      }).then((res) => {
          toast.success("User Created Successfully" + res)
          console.log(res);
      }).catch((e)=>{
        toast.error("User cannot be Created " + e.message)
        console.log(e.message);
      })
      

  }catch(e){
      console.log(e)
  }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-700">Register</h2>
      <p className="text-gray-500 mb-4">Create your new account.</p>

      {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}

      <form className="space-y-4" onSubmit={handleRegister}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
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
        <input
          type="password"
          value={confiermPassword}
          onChange={(e) => setconfiermPassword(e.target.value)}
          placeholder="Confirm your password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        
        <button
          type="submit"
          className="w-full py-2 mt-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-sm">
        Already have an account?
        <Link to="/login" className="text-blue-600 font-semibold hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;

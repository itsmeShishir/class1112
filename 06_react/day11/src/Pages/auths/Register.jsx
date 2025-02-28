import {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import register from '../../services/Registerservice'
function Register() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const navigate = useNavigate();
  const handleRegister = async(e)=>{
    e.preventDefault()
    await register(email, password, username, password2, phoneNumber, navigate)
  }
  return (
    <div>

    <form className="max-w-sm mx-auto" onSubmit={handleRegister}>
      <div className="mb-5">
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
        <input 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        type="text" 
        id="username" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        type="email" 
        id="email" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
      </div>
      <div className="mb-5">
        <label htmlFor="PhoneNumber"
         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your PhoneNumber</label>
        <input 
        type="PhoneNumber" value={phoneNumber}
        onChange={(e)=> setphoneNumber(e.target.value)}
        id="password" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div className="mb-5">
        <label htmlFor="password"
         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input 
        type="password" value={password}
        onChange={(e)=> setPassword(e.target.value)}
        id="password" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div className="mb-5">
        <label htmlFor="password"
         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input 
        type="password" value={password2}
        onChange={(e)=> setPassword2(e.target.value)}
        id="password" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    <h1>Already have an account? <Link to="/login" className='text-blue-500 font-bold'>Login</Link></h1>

    </div>
  )
}

export default Register
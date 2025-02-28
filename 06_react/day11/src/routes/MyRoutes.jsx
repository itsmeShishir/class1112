import {Routes, Route } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Auth from '../Pages/auths/Auth'
import Login from '../Pages/auths/Login'
import Register from '../Pages/auths/Register'
import SingleCategory from '../Pages/SingleCategory'
import SingleProduct from '../Pages/SingleProduct'
import UserDetails from '../Pages/UserDashboard/UserDetails'
import UserProfile from '../Pages/UserDashboard/UserProfile'
import { ToastContainer } from 'react-toastify';
import Dashboard from '../Pages/UserDashboard/Dashboard'
function MyRoutes() {
  return (
   <>
   <ToastContainer />
    <Routes>
        <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* how to create dynamic routes in react js */}
            <Route path='singlecategory/:id' element={<SingleCategory />} />
            <Route path='singlepage/:id' element={<SingleProduct />} />
            <Route path="*" element={<><h1>No Page found</h1></>} />
            <Route element={<Auth />}>
                <Route path='login' element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
            </Route>
            <Route element={<Dashboard />}>
                <Route path='account' element={<UserDetails />}></Route>
                <Route path='changepassword' element={<UserProfile />}></Route>
            </Route>
        </Route>
        
    </Routes>
   </>
  )
}

export default MyRoutes
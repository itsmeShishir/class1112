import {Routes, Route } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Auth from '../Pages/auths/Auth'
import Login from '../Pages/auths/Login'
import Register from '../Pages/auths/Register'
import SingleCategory from '../Pages/SingleCategory'
function MyRoutes() {
  return (
    <Routes>
        <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* how to create dynamic routes in react js */}
            <Route path='singlecategory/:id' element={<SingleCategory />} />
            <Route path="*" element={<><h1>No Page found</h1></>} />
            <Route element={<Auth />}>
                <Route path='login' element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
            </Route>
        </Route>
        
    </Routes>
  )
}

export default MyRoutes
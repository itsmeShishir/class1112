import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
function UserProfile() {
  const [old_password, setold_password] = React.useState('')
  const [new_password, setnew_password] = React.useState('')
  const [error, Seterror] = React.useState('')
  const hadleSubmit  = async(e)=> {
    e.preventDefault()
    try {
      let response = await axios.put("https://python.bhandarishishir.com.np/api/auth/change-password/", {
        old_password: old_password,
        new_password: new_password
      }, {
        headers :{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      if(response.status === 200){
        toast("Password Changed Successfully")
      }

    }catch(e){
      Seterror(e.message)
    }
  }
  return (
    <div className="w-[75vw] mx-auto">
      {/* show the error message  */}
      {
        error && <h1 className="text-red-500">{error}</h1>
      }
      <form onSubmit={hadleSubmit}>
        <div className="">
          <label htmlFor="old_password">Old Password</label>
          <input type="password" id="old_password" placeholder='Old Password' name="old_password" value={old_password} onChange={(e) => setold_password(e.target.value)} />
        </div>
         <div className="">
          <label htmlFor="old_password">New Password</label>
          <input type="password" id="new_password" placeholder='New Password' name="new_password" value={new_password} onChange={(e) => setnew_password(e.target.value)} />
        </div>
        <button type='submit' className='bg-blue-500 py-5 px-3 text-white text-lg mt-5'> Change Password</button>
      </form>
    </div>
  )
}

export default UserProfile
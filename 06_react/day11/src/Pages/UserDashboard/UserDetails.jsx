
function UserDetails() {
      let email=   localStorage.getItem('email')
      let username =   localStorage.getItem('username')
      let phone_number =  localStorage.getItem('phone_number')
      let role =  localStorage.getItem('role')
      let user_id =   localStorage.getItem('user_id')
  return (
    <div>
      <h1>{email}</h1>
      <h1>{username}</h1>
      <h1>{phone_number}</h1>
      <h1>{role}</h1>
      <h1>{user_id}</h1>
    </div>
  )
}

export default UserDetails
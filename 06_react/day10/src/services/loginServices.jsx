import axios from 'axios'
const login = async (email, password) => {
    try{
        let response = await axios.post("https://python.bhandarishishir.com.np/api/auth/login/", 
            {
            email: email,
            password: password
            },
        )
        localStorage.setItem('token', response.data.access)
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('refresh', response.data.refresh)
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('phone_number', response.data.phone_number)
        localStorage.setItem('role', response.data.role)
        localStorage.setItem('user_id', response.data.user_id)
    }catch(e){
        console.log(e)
    }
}

export default login

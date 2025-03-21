import axios from 'axios'

const login = async (email, password, navigate) => {
    try{
        let response = await axios.post("http://localhost:3000/login", 
            {
            email: email,
            password: password
            },
        )
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('role', response.data.role)
        localStorage.setItem('user_id', response.data.user_id)
        localStorage.setItem("is_Verified", response.data.is_Verified)
        if(response.data.role === "admin"){
            navigate('/admin')
        }else{
            navigate('/account')
        }
    }catch(e){
        console.log(e)
    }
}

export default login

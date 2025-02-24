import axios from 'axios'
const register = async (email, password, username, password2, phoneNumber ) => {
    try{
        let response = await axios.post("https://python.bhandarishishir.com.np/api/auth/register/", 
        {
        email: email,
        password: password,
        username: username,
        password2: password2,
        phone_number: phoneNumber
        })
        if(response.status === 201){
            return response
        }

    }catch(e){
        console.log(e)
    }
}

export default register

import axios from 'axios'
import { toast } from 'react-toastify'

const register = async (email, password, username, confiermPassword, navigate , toast) => {
    try{
        let response = await axios.post("http://localhost:3000/register", 
        {
        email: email,
        password: password,
        username: username,
        confiermPassword: confiermPassword,
        })
        if(response.status === 201){
            toast.success("User Register Sucessfully")
            navigate('/login')
        }else{
            toast.error("User Cannot be Register")
            navigate('/register')

        }

    }catch(e){
        console.log(e)
    }
}

export default register

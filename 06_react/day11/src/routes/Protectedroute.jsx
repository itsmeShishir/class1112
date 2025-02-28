import { useNavigate } from 'react-router-dom'
function Protectedroute() {
    const token = localStorage.getItem('token')
    let navigate = useNavigate();
    
    if(!token){
        navigate('/login')
    }
    return (
        <div>Protectedroute</div>
    )
}

export default Protectedroute

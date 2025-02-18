import { Outlet } from "react-router-dom"

function Auth() {
  return (
    <div className="bg-red-500 h-screen">
        <Outlet />
    </div>
  )
}

export default Auth
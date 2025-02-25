import { Outlet } from "react-router-dom"

function Auth() {
  return (
    <div className="bg-gray-700 h-full">
        <Outlet />
    </div>
  )
}

export default Auth
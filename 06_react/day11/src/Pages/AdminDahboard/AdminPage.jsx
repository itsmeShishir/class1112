import { Outlet } from "react-router-dom"
import Sidebar from "../../Component/Sidebar"
import AdminNavBar from "../../Component/AdminNavBar"

function AdminPage() {
  return (
    <div>
     <div className="flex h-screen bg-gray-100">

        <div className="hidden md:flex flex-col w-64 bg-gray-800 rounded-2xl">
            
          <Sidebar /> 
        </div>
    
        <div className="flex flex-col flex-1 overflow-y-auto">
            <AdminNavBar />
            <div className="p-4">
                <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
                <p className="mt-2 text-gray-600">This is an example dashboard using Tailwind CSS.</p>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default AdminPage

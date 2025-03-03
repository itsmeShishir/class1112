import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <Outlet />
      </div>
    </div>
  );
}

export default Auth;

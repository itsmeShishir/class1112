import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './routes/MyRoutes.jsx'
import { Provider } from 'react-redux'
import store from './redux/store'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {GoogleOAuthProvider} from '@react-oauth/google'
import { ToastContainer } from 'react-toastify';


const queryClient = new QueryClient()

const helmetContext = {};


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ToastContainer />
    <GoogleOAuthProvider clientId="387800676261-j4sj0haaig4sfdqtab8e59cg4m515g8g.apps.googleusercontent.com">
      <Provider store={store}>
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  </QueryClientProvider>
)

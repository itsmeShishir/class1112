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


const queryClient = new QueryClient()

const helmetContext = {};


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
)

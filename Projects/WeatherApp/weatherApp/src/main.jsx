import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Routers  from './routers/Routers.jsx'
import { RouterProvider } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routers}/>
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router'
import { route } from '../routes/route'
import 'animate.css';

createRoot(document.getElementById('root')).render(
    <RouterProvider router={route} />

)

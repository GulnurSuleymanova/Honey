// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { BrowserRouter, RouterProvider } from 'react-router'
// import { route } from '../routes/route'
// import 'animate.css';
// import { Provider } from 'react-redux';
// import { store } from '../src/store/store';
// import { ToastContainer } from 'react-toastify';

// createRoot(document.getElementById('root')).render(
//       <Provider store={store}>
//     <ToastContainer />

//         <RouterProvider router={route} />
//   </Provider>

// )

import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router' 
import { route } from '../routes/route'
import 'animate.css';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { ToastContainer } from 'react-toastify';
import { WishlistProvider } from '../src/context/WishlistContext'; 
import { AddtocardProvider } from './context/AddtocardContext';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <WishlistProvider> 
            <AddtocardProvider>

<ToastContainer 
          position="bottom-right" 
        />      <RouterProvider router={route} />
            </AddtocardProvider>

    </WishlistProvider>
  </Provider>
)

// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/homepage/Home.jsx';
import Products from "./Pages/homepage/allProducts/Products.jsx";
import Cart from "./Pages/homepage/Cart/Cart.jsx"
import { SignUp } from "./Pages/homepage/SignUp/SignUpPage.jsx";
import LoginPage from "./Pages/homepage/login/LoginPage.jsx";
import Account from "./Pages/homepage/account/Account.jsx";

 import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from "./redux/Reducer/Reducer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", element : <Home/>
      },
      { 
        path: "/products/:category", element : <Products />
      },
      {
        path: "/cart" , element : <Cart />
      },
      {
        path : "/account" , element : <Account />
      },
      {
        path:"/signUp", element : <SignUp />
      },
      {
        path:"/login" , element : <LoginPage />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
<CartProvider >
  <RouterProvider router = { router } />
</CartProvider>
  

  
)

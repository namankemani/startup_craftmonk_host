import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import ShoppingBag from './routes/ShoppingBag';
import Login from './routes/Login';
import App from './App';




const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children:
      [{ path: "/", element: <Home /> },
      { path: "/ShoppingBag", element: <ShoppingBag /> },
      { path: "/Login", element: <Login /> }
      ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './components/Home/Home';
import Routes from './components/Routes/Routes';
import AddJob from './components/AddJob/AddJob';
import MyPostedJobs from './components/MyPostedJobs/MyPostedJobs';
import MyBids from './components/MyBids/MyBids';
import BidRequests from './components/BidRequests/BidRequests';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-job",
        element: <AddJob></AddJob>
      },
      {
        path: "/myPostedJobs",
        element: <MyPostedJobs></MyPostedJobs>
      },
      {
        path: "/myBids",
        element: <MyBids></MyBids>
      },
      {
        path: "/bidRequests",
        element: <BidRequests></BidRequests>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>

)

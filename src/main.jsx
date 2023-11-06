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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import JobDetail from './components/JobDetail/JobDetail';

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
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: "/myPostedJobs",
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/jobs')
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
      },
      {
        path: "/Job-detail/:_id",
        element: <JobDetail></JobDetail>,
        loader: () => fetch('http://localhost:5000/jobs')
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

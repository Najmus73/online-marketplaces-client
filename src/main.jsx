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
import Update from './components/Update/Update';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement:<ErrorPage></ErrorPage>,
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
        loader: () => fetch('https://online-marketplaces-server-site-lzf582omn.vercel.app/jobs')
      },
      {
        path: "/myBids",
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
        loader: () => fetch('https://online-marketplaces-server-site-lzf582omn.vercel.app/bids')
      },
      {
        path: "/bidRequests",
        element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>,
        loader: () => fetch('https://online-marketplaces-server-site-lzf582omn.vercel.app/bids')
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
        element: <PrivateRoute><JobDetail></JobDetail></PrivateRoute>,
        loader: () => fetch('https://online-marketplaces-server-site-lzf582omn.vercel.app/jobs')
      },
      {
        path: "/update/:_id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`https://online-marketplaces-server-site-lzf582omn.vercel.app/jobs/${params._id}`)
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

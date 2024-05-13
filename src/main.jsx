import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import NotFound from './components/pages/NotFound.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.jsx';
import AuthProvider, { AuthContext } from './components/AuthProvider/AuthProvider.jsx';
import UserProfile from './components/pages/UserProfile.jsx';
import Home from './components/pages/Home/Home.jsx';
import AddJob from './components/pages/AddJob/AddJob.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import JobDetails from './components/pages/JobDetails/JobDetails.jsx';
import AllJobs from './components/pages/AllJobs/AllJobs.jsx';
import MyJobs from './components/pages/MyJobs/MyJobs.jsx';
import UpdateJob from './components/pages/UpdateJob/UpdateJob.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/jobs')
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
        loader: () => fetch('http://localhost:5000/jobs')
      },
      {
        path: "/myJobs",
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/jobs')
      },
      {
        path: "/postJob",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: "/updateJob/:id",
        element: <PrivateRoute><UpdateJob></UpdateJob> </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
      },
      {
        path: "/job/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
      },
      {
        path: "/userProfile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

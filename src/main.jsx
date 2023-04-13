import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Statistic from "./components/Statistic/Statistic";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import Category from "./components/Category/Category";
import JobDetails from "./components/Featured/JobDetails";
import jobsLoader from "./loaders/jobsLoader";
import ViewJobs from "./components/AppliedJobs/ViewJobs";
import ErrorHandler from "./components/ErrorHandler";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorHandler />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category",
        element: <Category></Category>,
      },
      {
        path: "/details/:id",
        element: <JobDetails />,
        loader: jobsLoader,
      },
      {
        path: "/details",
        element: <JobDetails />,
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      {
        path: "appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: jobsLoader,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);

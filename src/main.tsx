// import React from 'react'
import {  createBrowserRouter,  RouterProvider, } from "react-router";
import ReactDOM from "react-dom/client";
import App from "./App";

const router = createBrowserRouter([
  {  path: "/", element: <App/>,},
]);

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

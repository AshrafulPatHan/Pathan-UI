// import React from 'react'
import {  createBrowserRouter,  RouterProvider, } from "react-router";
import ReactDOM from "react-dom/client";
import App from "./App";
import Ui from "./page/Ui";

const router = createBrowserRouter([
  {  path: "/", element: <App/>,},
  {  path: "/ui", element: <Ui/>,},
]);

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

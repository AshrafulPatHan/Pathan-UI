// import React from 'react'
import {  createBrowserRouter,  RouterProvider, } from "react-router";
import ReactDOM from "react-dom/client";
import App from "./App";
import Ui from "./page/Ui";
import Code from "./page/code";
import Animation from "./page/Animetion";
import Button from "./page/Button";
import Slider from "./page/Clider";
import Color_Text from "./page/Color_Text";
import Color from "./page/Color";
import Contact from "./page/Contact";
import Dropdown from "./page/Dropdown";
import Express from "./page/Express";
import Flex from "./page/Flex";
import Font from "./page/Font";
import Form from "./page/Form";
import Grid from "./page/Grid";
import Header_Text from "./page/Header_Text";
import Hero from "./page/Hero";
import Image_Shape from "./page/Image_Shap";
import Image from "./page/Image";
import Input from "./page/Input";
import Menu from "./page/Menu";
import Model from "./page/Model";
import Nav_Animation from "./page/Nav_Animetion";
import Paragraph_Text from "./page/Pragraf_Text";
import Registration from "./page/registration";
import Scroll_animation from "./page/Scroll_animation";
import Shape from "./page/Shape";
import Tutorial from "./page/Tutorial";
import Footer from "./components/navigation/footer/Footer";
import Navbar from "./components/navigation/navbar/Navbar";
import Admin_Page from "./components/admin page/Admin_Page";

const router = createBrowserRouter([
  {  path: "/", element: <App/>,},
  {  path: "/ui", element: <Ui/>,},
  {  path: "/code", element: <Code/>,},
  {  path: "/animation", element: <Animation/>,},
  {  path: "/button", element: <Button/>,},
  {  path: "/slider", element: <Slider/>,},
  {  path: "/color-text", element: <Color_Text/>,},
  {  path: "/color", element: <Color/>,},
  {  path: "/contact", element: <Contact/>,},
  {  path: "/dropdown", element: <Dropdown/>,},
  {  path: "/express", element: <Express/>,},
  {  path: "/flex", element: <Flex/>,},
  {  path: "/font", element: <Font/>,},
  {  path: "/form", element: <Form/>,},
  {  path: "/grid", element: <Grid/>,},
  {  path: "/header-text", element: <Header_Text/>,},
  {  path: "/hero", element: <Hero/>,},
  {  path: "/image-shape", element: <Image_Shape/>,},
  {  path: "/image", element: <Image/>,},
  {  path: "/input", element: <Input/>,},
  {  path: "/menu", element: <Menu/>,},
  {  path: "/model", element: <Model/>,},
  {  path: "/nav-animation", element: <Nav_Animation/>,},
  {  path: "/paragraph-text", element: <Paragraph_Text/>,},
  {  path: "/registration", element: <Registration/>,},
  {  path: "/scroll-animation", element: <Scroll_animation/>,},
  {  path: "/tutorial", element: <Tutorial/>,},
  {  path: "/shape", element: <Shape/>,},
  {  path: "/footer", element: <Footer/>,},
  {  path: "/admin-page", element: <Admin_Page/>,},
  {  path: "/navbar", element: <Navbar/>,},
]);

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

import { useState } from "react";
import "./App.css";
import Layout from "./component/Layout";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

// const router = createBrowserRouter([{
//   path:"/",
//   element:<Layout/>,
//     children : [
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       },
//       ]
// }])

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
  </Route>
))

  return (
    <>
      <div className="app-main">
        <RouterProvider router={router}/>
      </div>
    </>
  );
}


export default App;

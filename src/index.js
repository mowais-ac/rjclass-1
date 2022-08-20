import React from "react";
import ReactDOM from "react-dom/client";

import "./css/index.css";

// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Test2 from "./pages/Test2";
import UseEffect from "./pages/UseEffect";
import GetLocation from "./pages/GetLocation";
import Arrays from "./pages/Arrays";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/test/test2"} element={<Test2 />} />
        <Route path={"/product/:productName"} element={<Product />} />
        <Route path={"/use-effect"} element={<UseEffect />} />
        <Route path={"/get-location"} element={<GetLocation />} />
        <Route path={"/arrays"} element={<Arrays />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Donated from "./donated";
import Login from "./login";
import Register from "./register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="app" element={<App />} />
        <Route path="donated" element={<Donated />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route
          path = "*"
          element={
            <div style={{padding:"1rem"}}>
              <h1>Misa empty</h1>
            </div>
          }
        />
    </Routes>
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Donated from "./donated";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="donated" element={<Donated />} />
        <Route
          path = "*"
          element={
            <div style={{padding:"1rem"}}>
              <h1>Misa empty</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

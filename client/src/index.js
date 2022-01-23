import React from "react";
import ReactDOM from "react-dom";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Hotels,
  Trips,
  Drivers,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Hotels />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/drivers" element={<Drivers />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);



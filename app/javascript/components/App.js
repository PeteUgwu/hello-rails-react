import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Greeting from "./greeting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;

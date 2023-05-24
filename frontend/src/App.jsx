import "./App.css";
import React from "react";
import { LoginPage, SignupPage, ActivationPage } from "./Routes.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation/:url" element={<ActivationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

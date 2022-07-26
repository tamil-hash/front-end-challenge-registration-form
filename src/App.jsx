import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//components
import RegistrationForm from "components/RegistrationForm";
import SuccessPage from "components/SuccessPage";
import NotFound from "components/NotFound";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

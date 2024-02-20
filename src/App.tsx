import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataTablePage from "./DataTablePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/table/:dataType" element={<DataTablePage />} />
      </Routes>
    </Router>
  );
};

export default App;

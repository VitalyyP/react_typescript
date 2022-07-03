import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import TodosPage from "./pages/TodosPage";
import Counter from "./pages/Counter";

const App: React.FC = () => {
  return (
    // <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="counter" element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter>
    //</React.StrictMode>
  );
};

export default App;

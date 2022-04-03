import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import CompetitionList from "./pages/CompetitionList";
import SeriesList from "./pages/SeriesList";
import TaskList from "./pages/TaskList";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/common.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CompetitionList />} />
        <Route exact path="/competition" element={<CompetitionList />} />
        <Route exact path="/series" element={<SeriesList />} />
        <Route exact path="/tasks" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

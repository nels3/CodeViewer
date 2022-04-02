import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompetitionList from "./pages/CompetitionList";
import SeriesList from "./pages/SeriesList";
import TaskList from "./pages/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

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

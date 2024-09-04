import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Home from './Home';
import Live from "./Live";
import Movies from "./Movies";
import Sports from "./Sports";
import TVShows from "./TVShows";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/live" element={<Live />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/tvShows" element={<TVShows />} />
    </Routes>
  </BrowserRouter>
);

export default App;

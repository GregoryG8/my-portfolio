import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import AboutMe from "./views/AboutMe/AboutMe";
import Experience from "./views/Experience/Experience";
import ContactMe from "./views/ContactMe/ContactMe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<AboutMe />} />
        </Route>
        <Route path="/experience" element={<Layout />}>
          <Route index element={<Experience />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


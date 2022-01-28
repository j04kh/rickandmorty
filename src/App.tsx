import React, { lazy, Suspense, useRef } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Characters from "./views/Characters";
import Character from "./views/Character";
import Episodes from "./views/Episodes";
import Episode from "./views/Episode";
import Locations from "./views/Locations";

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<Episode />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </Layout>
  );
};

export default App;

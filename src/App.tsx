import React, { lazy, Suspense, useRef } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Characters from "./views/Chacracters";
import Character from "./views/Character";

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
      </Routes>
    </Layout>
  );
};

export default App;

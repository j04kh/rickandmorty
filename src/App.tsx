import React, { lazy, Suspense, useRef } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Chacracters";

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Layout>
  );
};

export default App;

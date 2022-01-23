import React, { lazy, Suspense, useRef } from "react";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <h1 className="absolute text-2xl font-bold text-white z-50">homepage</h1>
    </Layout>
  );
};

export default App;

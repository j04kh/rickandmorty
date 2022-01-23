import React, { lazy, Suspense, useRef } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";

import Characters from "./assets/characters.jpg";
import Episodes from "./assets/episodes.jpg";
import Locations from "./assets/locations.jpg";

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <div className="w-4/5 max-w-2xl h-2/3 mt-5 px-4 py-5 bg-gray-900 flex flex-col items-center bg-opacity-75 rounded-lg text-gray-100">
        <h1 className="text-lg">Welcome to Rick's garage 🧪 </h1>
        <div className="mt-5 h-full w-full text-center flex flex-col items-center justify-evenly">
          <div className="h-28 flex flex-col items-center bg-gray-900">
            <img className="h-full" src={Characters} alt="Characters" />
            <h2>CHARACTERS</h2>
          </div>
          <div className="h-28 flex flex-col items-center bg-gray-900">
            <img className="h-full" src={Episodes} alt="Episodes" />
            <h2>EPISODES</h2>
          </div>
          <div className="h-28 flex flex-col items-center bg-gray-900">
            <img className="h-full" src={Locations} alt="Locations" />
            <h2>LOCATIONS</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;

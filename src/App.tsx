import React, { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";

const App: React.FC = () => {
  const Scene = lazy(() => import("./components/Scene"));
  return (
    <div className="h-screen w-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full h-full bg-gray-800">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Canvas>
            <PerspectiveCamera
              fov={70}
              zoom={1}
              far={20}
              position={[1, -2, 5.5]}
              rotation={[0, 4.5 * (Math.PI / 4), 0]}
            >
              <Scene position={[0, 0, 0]} />
            </PerspectiveCamera>
            <OrbitControls />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default App;

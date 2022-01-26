import React, { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import SuspenseFallback from "./SuspenseFallback";

const Layout: React.FC = ({ children }) => {
  const Scene = lazy(() => import("./Scene"));
  return (
    <div className="h-screen w-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full h-full bg-gray-800">
        <Suspense fallback={<SuspenseFallback />}>
          <div className="h-full w-full min-h-screen min-w-screen absolute flex flex-col items-center justify-center z-10">
            {children}
          </div>
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
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;

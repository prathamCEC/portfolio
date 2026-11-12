
"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Planet from "./Planet";
import OrbitRing from "./OrbitRing";
import StarField from "./StarField";
import CameraController from "./CameraController";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <Suspense fallback={null}>

        {/* Lighting */}
        <ambientLight intensity={0.65} />

        <directionalLight
          position={[-3, 4, 5]}
          intensity={2}
          color="#F4F1EA"
        />

        <pointLight
          position={[3, 2, 2]}
          intensity={15}
          color="#D98245"
        />

        {/* Environment */}
        <StarField />

        {/* Central planet */}
        <Planet />

        {/* Orbital rings */}
        <OrbitRing
          radius={1.55}
          tilt={[0.8, 0.25, 0]}
          speed={0.12}
          opacity={0.9}
        />

        <OrbitRing
          radius={1.85}
          tilt={[1.1, -0.3, 0.3]}
          speed={-0.06}
          opacity={0.3}
        />

        {/* Small moon */}
        <mesh position={[1.8, 0.8, -0.3]}>
          <sphereGeometry args={[0.13, 32, 32]} />
          <meshStandardMaterial
            color="#64748B"
            roughness={1}
          />
        </mesh>

        <CameraController />

      </Suspense>
    </Canvas>
  );
}

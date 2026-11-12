
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Planet() {
  const planetRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={planetRef}>

      {/* Planet surface */}
      <mesh>
        <sphereGeometry args={[1, 96, 96]} />
        <meshStandardMaterial
          color="#542b19"
          emissive="#9c451c"
          emissiveIntensity={0.55}
          roughness={0.85}
          metalness={0.25}
        />
      </mesh>

      {/* Atmospheric shell */}
      <mesh scale={1.09}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#D98245"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Central glow */}
      <pointLight
        color="#D98245"
        intensity={12}
        distance={4}
        decay={2}
      />

    </group>
  );
}


"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface OrbitRingProps {
  radius: number;
  tilt: [number, number, number];
  speed: number;
  opacity: number;
}

export default function OrbitRing({
  radius,
  tilt,
  speed,
  opacity,
}: OrbitRingProps) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * speed;
    }
  });

  return (
    <mesh
      ref={ringRef}
      rotation={tilt}
    >
      <torusGeometry args={[radius, 0.012, 16, 180]} />

      <meshBasicMaterial
        color="#D98245"
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

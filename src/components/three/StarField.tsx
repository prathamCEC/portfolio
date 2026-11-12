"use client";

import { useMemo } from "react";
import "@react-three/fiber";
import * as THREE from "three";

export default function StarField() {
  const positions = useMemo(() => {
    const count = 1800;
    const points = new Float32Array(count * 3);
    let seed = 123456789;
    const nextRandom = () => {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      return seed / 0x100000000;
    };

    for (let i = 0; i < count * 3; i += 3) {
      points[i] = (nextRandom() - 0.5) * 18;
      points[i + 1] = (nextRandom() - 0.5) * 18;
      points[i + 2] = (nextRandom() - 0.5) * 12;
    }

    return points;
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    return geo;
  }, [positions]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        color="#F4F1EA"
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

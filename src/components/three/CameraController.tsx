
"use client";

import { useFrame, useThree } from "@react-three/fiber";

export default function CameraController() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    camera.position.x +=
      (pointer.x * 0.35 - camera.position.x) * 0.025;

    camera.position.y +=
      (pointer.y * 0.25 - camera.position.y) * 0.025;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

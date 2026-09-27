"use client";

import { useEffect, useRef } from "react";
import {
  Box3,
  Mesh,
  OrthographicCamera,
  Scene,
  Texture,
  Vector3,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function ProfileModel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(234, 214, false);

    const scene = new Scene();
    const camera = new OrthographicCamera();
    const controls = new OrbitControls(camera, canvas);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3;
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minZoom = 0.7;
    controls.maxZoom = 2.5;
    let disposed = false;

    const model = new GLTFLoader().loadAsync("/models/kyouyoujin.glb");
    void model.then(({ scene: object }) => {
      if (disposed) return;

      scene.add(object);
      const bounds = new Box3().setFromObject(object, true);
      const center = bounds.getCenter(new Vector3());
      const size = bounds.getSize(new Vector3());
      const aspect = 234 / 214;
      const radius = size.length() / 2;
      const height = radius * 2 * 1.1;

      camera.left = (-height * aspect) / 2;
      camera.right = (height * aspect) / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.near = 0.1;
      camera.far = radius * 4 + 2;
      camera.position.set(center.x + radius * 2 + 1, center.y, center.z);
      camera.lookAt(center);
      camera.updateProjectionMatrix();
      controls.target.copy(center);
      controls.update(0);
      renderer.render(scene, camera);

      let previousTime = performance.now();
      renderer.setAnimationLoop((time) => {
        const delta = (time - previousTime) / 1000;
        previousTime = time;
        controls.update(delta);
        renderer.render(scene, camera);
      });
    });

    return () => {
      disposed = true;
      renderer.setAnimationLoop(null);
      controls.dispose();
      renderer.dispose();
      void model.then(({ scene: object }) => {
        object.traverse((child) => {
          if (!(child instanceof Mesh)) return;
          child.geometry.dispose();
          const materials = Array.isArray(child.material)
            ? child.material
            : [child.material];
          for (const material of materials) {
            for (const value of Object.values(material)) {
              if (value instanceof Texture) value.dispose();
            }
            material.dispose();
          }
        });
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="教養人の3Dモデル。ドラッグで回転、スクロールで拡大・縮小"
      className="h-[214px] w-[234px] cursor-grab active:cursor-grabbing"
    />
  );
}

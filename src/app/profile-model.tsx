"use client";

import { useEffect, useRef } from "react";
import {
  Box3,
  Color,
  GLSL3,
  Mesh,
  OrthographicCamera,
  Scene,
  ShaderMaterial,
  Texture,
  Vector2,
  Vector3,
  WebGLRenderer,
  WebGLRenderTarget,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FullScreenQuad } from "three/addons/postprocessing/Pass.js";
import { profileDotFragmentShader } from "./profile-dot-shader";

const canvasSize = { width: 320, height: 300 };

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
    renderer.setSize(canvasSize.width, canvasSize.height, false);

    const resolution = renderer.getDrawingBufferSize(new Vector2());
    const renderTarget = new WebGLRenderTarget(resolution.x, resolution.y, {
      samples: 4,
    });
    const dotMaterial = new ShaderMaterial({
      glslVersion: GLSL3,
      uniforms: {
        u_image: { value: renderTarget.texture },
        u_resolution: { value: resolution },
        u_cellPx: { value: 2 * renderer.getPixelRatio() },
        u_dotSize: { value: 1 },
        u_density: { value: 2 },
        u_contrast: { value: 1.4 },
        u_gamma: { value: 0.4 },
        u_threshold: { value: 0.8 },
        u_randomness: { value: 0 },
        u_seed: { value: 0 },
        u_invert: { value: false },
        u_sourceColor: { value: false },
        u_dotColor: { value: new Color(0x000000) },
        u_bgColor: { value: new Color(0xffffff) },
      },
      vertexShader:
        "void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",
      fragmentShader: profileDotFragmentShader,
      depthTest: false,
      depthWrite: false,
    });

    const dotQuad = new FullScreenQuad(dotMaterial);
    const scene = new Scene();
    scene.background = new Color(0xffffff);
    const camera = new OrthographicCamera();
    const controls = new OrbitControls(camera, canvas);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3;
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom = false;
    let disposed = false;

    function render() {
      renderer.setRenderTarget(renderTarget);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      dotQuad.render(renderer);
    }

    const model = new GLTFLoader().loadAsync("/models/kyouyoujin.glb");
    void model.then(({ scene: object }) => {
      if (disposed) return;

      scene.add(object);
      const bounds = new Box3().setFromObject(object, true);
      const center = bounds.getCenter(new Vector3());
      const size = bounds.getSize(new Vector3());
      const aspect = canvasSize.width / canvasSize.height;
      const radius = size.length() / 2;
      const height = radius * 2 * 1.1;

      camera.left = (-height * aspect) / 2;
      camera.right = (height * aspect) / 2;
      camera.top = height / 2 + 0.3;
      camera.bottom = -height / 2 + 0.3;
      camera.zoom = 1.5;
      camera.near = 0.1;
      camera.far = radius * 4 + 2;
      camera.position.set(center.x + radius * 2 + 1, center.y, center.z);
      camera.lookAt(center);
      camera.updateProjectionMatrix();
      controls.target.copy(center);
      controls.update(0);
      render();

      let previousTime = performance.now();
      renderer.setAnimationLoop((time) => {
        const delta = (time - previousTime) / 1000;
        previousTime = time;
        controls.update(delta);
        render();
      });
    });

    return () => {
      disposed = true;
      renderer.setAnimationLoop(null);
      controls.dispose();
      renderTarget.dispose();
      dotMaterial.dispose();
      dotQuad.dispose();
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
      style={{ width: canvasSize.width, height: "auto" }}
      className="max-w-full"
    />
  );
}

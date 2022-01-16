import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import waterVertexShader from "./shaders/water/vertex.glsl";
import waterFragmentShader from "./shaders/water/fragment.glsl";

const Raging_Sea = () => {
  const c = useRef();

  useEffect(() => {
    /**
     * Base
     */
    // Debug
    const gui = new dat.GUI({ width: 340 });
    const debugObject = {};

    // Color
    debugObject.depthColor = "#186691";
    debugObject.surfaceColor = "#9bd8ff";

    // Canvas
    const canvas = c.current;

    // Scene
    const scene = new THREE.Scene();

    /**
     * Textures
     */

    /**
     * Test mesh
     */
    // Geometry
    const geometry = new THREE.PlaneGeometry(4, 4, 2048, 2048);

    const material = new THREE.ShaderMaterial({
      vertexShader: waterVertexShader,
      fragmentShader: waterFragmentShader,
      uniforms: {
        uTime: { value: 0 },

        uBigWavesElevation: { value: 0.2 },
        uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
        uBigWavesSpeed: { value: 0.75 },

        uSmallWavesElevation: { value: 0.15 },
        uSmallWavesFrequency: { value: 3 },
        uSmallWavesSpeed: { value: 0.2 },
        uSmallIterations: { value: 4 },

        uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
        uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
        uColorOffset: { value: 0.08 },
        uColorMultiplier: { value: 5 },
      },
    });

    // Mesh
    const sea = new THREE.Mesh(geometry, material);

    sea.rotation.x = -Math.PI * 0.5;
    sea.position.z = -2;
    sea.position.y = -0.55;

    // sea.rotation.z = -10;
    scene.add(sea);

      material.uniforms.uBigWavesElevation = 0.106
      material.uniforms.uBigWavesFr = 0.106
    gui
    .add(material.uniforms.uBigWavesElevation, "value")
    .min(0)
    .max(1)
    .step(0.001)
    .name("uBigWavesElevation");
    gui
      .add(material.uniforms.uBigWavesFrequency.value, "x")
      .min(0)
      .max(10)
      .step(0.001)
      .name("uBigWavesFrequencyX");
    gui
      .add(material.uniforms.uBigWavesFrequency.value, "y")
      .min(0)
      .max(10)
      .step(0.001)
      .name("uBigWavesFrequencyY");
    gui
      .add(material.uniforms.uBigWavesSpeed, "value")
      .min(0)
      .max(4)
      .step(0.001)
      .name("uBigWavesSpeed");
    gui
      .add(material.uniforms.uSmallWavesElevation, "value")
      .min(0)
      .max(1)
      .step(0.001)
      .name("uSmallWavesElevation");
    gui
      .add(material.uniforms.uSmallWavesFrequency, "value")
      .min(0)
      .max(30)
      .step(0.001)
      .name("uSmallWavesFrequency");
    gui
      .add(material.uniforms.uSmallWavesSpeed, "value")
      .min(0)
      .max(4)
      .step(0.001)
      .name("uSmallWavesSpeed");
    gui
      .add(material.uniforms.uSmallIterations, "value")
      .min(0)
      .max(5)
      .step(1)
      .name("uSmallIterations");
    gui
      .addColor(debugObject, "depthColor")
      .name("Depth Color")
      .onChange(() =>
        material.uniforms.uDepthColor.value.set(debugObject.depthColor)
      );
    gui
      .addColor(debugObject, "surfaceColor")
      .name("Surface Color")
      .onChange(() =>
        material.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor)
      );
    gui
      .add(material.uniforms.uColorOffset, "value")
      .min(0)
      .max(5)
      .step(0.001)
      .name("uColorOffset");
    gui
      .add(material.uniforms.uColorMultiplier, "value")
      .min(0)
      .max(10)
      .step(0.001)
      .name("uColorMultiplier");

    // const count = geometry.attributes.position.count;
    // const randoms = new Float32Array(count);

    // for (let i = 0; i < count; i++) {
    //     randoms[i] = Math.random();
    // }

    // geometry.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 1));

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // window.addEventListener("resize", () => {
    //   // Update sizes
    //   sizes.width = window.innerWidth;
    //   sizes.height = window.innerHeight;

    //   // Update camera
    //   camera.aspect = sizes.width / sizes.height;
    //   camera.updateProjectionMatrix();

    //   // Update renderer
    //   renderer.setSize(sizes.width, sizes.height);
    //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(0.25, -0.25, 1);
    scene.add(camera);

    // Controls
    // const controls = new OrbitControls(camera, canvas);
    // controls.enableDamping = true;

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Animate
     */
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      material.uniforms.uTime.value = elapsedTime;
      // Update controls
    //   controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return <canvas ref={c} id="threejs" />;
};

export default Raging_Sea;

import React, {
  // useEffect,
  useRef,
} from "react";
import styled from "styled-components";
// import circ from './circle.svg';
// import * as THREE from 'three';
// import anime from 'animejs';
// import vertex from './vertex.glsl';
// import fragment from './fragment.glsl';

const magicNumber = 72;

const Container = styled.div`
  box-sizing: border-box;
  height: calc(100vh);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: calc(${magicNumber} / 4);
  position: relative;
  overflow: hidden;

  #threeD-img-thingy {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const HomeIntro = () => {
  const container = useRef(null);
  const canvas = useRef(null);

  // useEffect(() => {

  //     if (container !== null && container !== undefined) {
  //         const scene = new THREE.Scene();

  //         const material = new THREE.MeshNormalMaterial();
  //         const shadermaterial = new THREE.RawShaderMaterial({
  //             vertexShader: vertex,
  //             fragmentShader: fragment,
  //             wireframe: true,
  //         });
  //         material.flatShading = true;

  //         const dodeca = new THREE.Mesh(
  //             new THREE.OctahedronGeometry(2.5, 6),
  //             shadermaterial
  //         );

  //         scene.add(dodeca);

  //         const count = dodeca.position.count;
  //         const randoms = new Float32Array(count);

  //         for (let i = 0; i < count; i++) {
  //             randoms[i] = Math.random();
  //         }

  //         dodeca.position.z = -3.5;
  //         dodeca.position.x = 3;
  //         scene.background = new THREE.Color(0x0e0e0e);

  //         const sizes = {
  //             width: container.current.offsetWidth,
  //             height: container.current.offsetHeight,
  //         };

  //         const pointLight = new THREE.PointLight(0xffffff, 0.5);
  //         pointLight.position.x = 0;
  //         pointLight.position.y = 2;
  //         pointLight.position.z = 0;

  //         const camera = new THREE.PerspectiveCamera(
  //             75,
  //             sizes.width / sizes.height,
  //             0.1,
  //             1000
  //         );

  //         scene.add(pointLight);
  //         scene.add(camera);

  //         const renderer = new THREE.WebGLRenderer({
  //             canvas: canvas.current,
  //         });

  //         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //         renderer.setSize(sizes.width, sizes.height);
  //         renderer.render(scene, camera);

  //         window.addEventListener('resize', () => {
  //             sizes.width = container.current.offsetWidth;
  //             sizes.height = container.current.offsetHeight;

  //             camera.aspect = sizes.width / sizes.height;
  //             camera.updateProjectionMatrix();

  //             renderer.setSize(sizes.width, sizes.height);
  //             renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //         });

  //         const clock = new THREE.Clock();
  //         const tick = () => {
  //             const elapsedTime = clock.getElapsedTime();
  //             camera.lookAt(0, 0, 0);
  //             renderer.render(scene, camera);

  //             dodeca.rotation.y = 0.3 * elapsedTime;
  //             dodeca.rotation.x = 270;

  //             requestAnimationFrame(tick);
  //         };

  //         tick();
  //     }
  // }, []);

  return (
    <Container id="home" ref={container}>
      <canvas id="threeD-img-thingy" ref={canvas} />
    </Container>
  );
};

export default HomeIntro;

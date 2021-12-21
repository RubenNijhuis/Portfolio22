import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import circ from './circle.svg';
import * as THREE from 'three';
import anime from 'animejs';
import MEDIA from 'helpers/mediaTemplates';
import vertex from './vertex.glsl';
import fragment from './fragment.glsl';
import {
    magicNumber,
    mainDark,
    subtitle,
    mainTitle,
    highlight,
} from 'constants/theme';

const Container = styled.div`
    grid-area: home;
    grid-column: -1 / 1;
    box-sizing: border-box;
    height: calc(100vh - calc(${magicNumber} * 1.5));

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: calc(${magicNumber} / 4);
    position: relative;
    overflow: hidden;
    background: ${mainDark};

    .logo {
        opacity: 0;
        font-size: ${subtitle};
        font-weight: 900;
        color: white;
        z-index: 100;
    }

    .flex {
        margin-left: calc(${magicNumber} / -2);
        transform: scale(0.6) translateX(-20%);
        display: flex;
        position: relative;
        width: 700px;

        .content {
            position: relative;
            color: white;
            width: 600px;

            div {
                display: inline-block;
                font-size: ${mainTitle};
                overflow: hidden;

                span {
                    display: inline-block;
                    margin-right: 22px;
                    transform: translateY(250%) rotate(25deg) scaleY(3);
                }
            }

            &:before {
                content: '';
                position: absolute;
                width: calc(${magicNumber} * 2);
                height: calc(${magicNumber} / 8);
                background: ${highlight};
                top: -30px;
                left: 4px;
                border-radius: calc(${magicNumber} / 4);
            }
        }
    }

    #threeD-img-thingy {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }

    .scroll-indicator {
        margin-left: calc(${magicNumber} / -2);
        margin-bottom: calc(${magicNumber} / -2);
        color: white;
        display: flex;
        align-items: center;
        z-index: 100;

        .circ {
            margin-right: calc(${magicNumber} / -2);
        }
    }

    ${MEDIA.MIN_OLD_HD`
        grid-area: home;
        grid-column: -1 / 1;
        box-sizing: border-box;
        height: 100vh;
    
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: calc(${magicNumber} / 2);
        position: relative;
        overflow: hidden;
        background: ${mainDark};
    
        .logo {
            opacity: 1;
        }
    
        .flex {
            display: flex;
            padding: 0px;
            position: relative;
        
            transform: scale(1) translateX(10%);
        
            .content {
                position: relative;
                color: white;
            
                &:before {
                    content: '';
                    position: absolute;
                    width: calc(${magicNumber} * 2);
                    height: calc(${magicNumber} / 8);
                    background: ${highlight};
                    top: -22px;
                    left: 4px;
                    border-radius: calc(${magicNumber} / 4);
                }
            }
        }
    
        .content {
            align-self: start;
            max-width: 750px;
        
            div {
                display: inline-block;
                flex-wrap: wrap;
                font-size: ${mainTitle};
                overflow: hidden;
            
                span {
                    display: inline-block;
                    margin-right: 22px;
                }
            }
        }
    
        #threeD-img-thingy {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
    
        .scroll-indicator {
            margin-left: calc(${magicNumber} / -2);
            margin-bottom: calc(${magicNumber} / -2);
            color: white;
            display: flex;
            align-items: center;
            z-index: 100;
        
            .circ {
                margin-right: calc(${magicNumber} / -2);
            }
        }
    `}

    ${MEDIA.MIN_HD_READY`
        .flex {
            padding: calc(${magicNumber} / 2);
        }
    `};
`;

const HomeIntro = () => {
    const container = useRef(null);
    const canvas = useRef(null);
    const contentspans = useRef(null);

    const heading = 'Creating digital experiences for creative people'.split(
        ' '
    );

    useEffect(() => {
        anime({
            targets: document.querySelectorAll('#spans span'),
            translateY: ['275%', '-14%'],
            rotate: ['20deg', '0deg'],
            scaleY: [3, 1],
            easing: 'cubicBezier(.19,.21,.01,.99)',
            duration: 1125,
            delay: anime.stagger(175, { start: 500 }),
        });

        if (container !== null && container !== undefined) {
            const scene = new THREE.Scene();

            const material = new THREE.MeshNormalMaterial();
            const shadermaterial = new THREE.RawShaderMaterial({
                vertexShader: vertex,
                fragmentShader: fragment,
                wireframe: true,
            });
            material.flatShading = true;

            const dodeca = new THREE.Mesh(
                new THREE.OctahedronGeometry(2.5, 6),
                shadermaterial
            );

            scene.add(dodeca);

            const count = dodeca.position.count;
            const randoms = new Float32Array(count);

            for (let i = 0; i < count; i++) {
                randoms[i] = Math.random();
            }

            // dodeca.setAttribute(
            //     'aRandom',
            //     new THREE.BufferAttribute(randoms, 1)
            // );

            dodeca.position.z = -3.5;
            dodeca.position.x = 3;
            scene.background = new THREE.Color(0x1e1e1e);

            const sizes = {
                width: container.current.offsetWidth,
                height: container.current.offsetHeight,
            };

            const pointLight = new THREE.PointLight(0xffffff, 0.5);
            pointLight.position.x = 0;
            pointLight.position.y = 2;
            pointLight.position.z = 0;

            const camera = new THREE.PerspectiveCamera(
                75,
                sizes.width / sizes.height,
                0.1,
                1000
            );

            scene.add(pointLight);
            scene.add(camera);

            const renderer = new THREE.WebGLRenderer({
                canvas: canvas.current,
            });

            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(sizes.width, sizes.height);
            renderer.render(scene, camera);

            window.addEventListener('resize', () => {
                sizes.width = container.current.offsetWidth;
                sizes.height = container.current.offsetHeight;

                camera.aspect = sizes.width / sizes.height;
                camera.updateProjectionMatrix();

                renderer.setSize(sizes.width, sizes.height);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            });

            const clock = new THREE.Clock();
            const tick = () => {
                const elapsedTime = clock.getElapsedTime();
                camera.lookAt(0, 0, 0);
                renderer.render(scene, camera);

                dodeca.rotation.y = 0.3 * elapsedTime;
                dodeca.rotation.x = 270;

                requestAnimationFrame(tick);
            };

            tick();
        }
    }, []);

    return (
        <Container id="home" ref={container}>
            <canvas id="threeD-img-thingy" ref={canvas} />
            <div className="logo">
                <h1>RN</h1>
            </div>
            <div className="flex">
                <div className="content" id="spans" ref={contentspans}>
                    {heading.map((el, i) => (
                        <div>
                            <span>{el}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="scroll-indicator">
                <img
                    className="circ"
                    height="100"
                    width="100"
                    style={{ transform: 'scale(0.4)' }}
                    src={circ}
                />
                <span>Scroll</span>
            </div>
        </Container>
    );
};

export default HomeIntro;

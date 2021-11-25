import {useEffect, useRef} from "react";
import {
    BufferAttribute,
    BufferGeometry,
    Clock,
    Color,
    PerspectiveCamera,
    PointLight,
    Points,
    PointsMaterial,
    Scene,
    SphereBufferGeometry,
    TextureLoader,
    Vector2,
    WebGLRenderer,
} from "three";
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer";
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass";
import {GlitchPass} from "three/examples/jsm/postprocessing/GlitchPass";
import {UnrealBloomPass} from "three/examples/jsm/postprocessing/UnrealBloomPass";
import {BokehPass} from "three/examples/jsm/postprocessing/BokehPass";
import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass";
import {BleachBypassShader} from "three/examples/jsm/shaders/BleachBypassShader";

const useParticles = ({isDark}) => {
    const canvasRef = useRef<HTMLCanvasElement>();


    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        const backgroundColor = isDark ? "#21282a" : "#ffffff";
        const torusColor = isDark ? "#aaaaaa" : "#aaaaaa";
        const particlesColor = isDark ? "#aaaaaa" : "#aaaaaa";

        const textureLoader = new TextureLoader();

        // Scene
        const scene = new Scene();

        // Objects
        const sphereGeometry = new SphereBufferGeometry(.7, 32, 32);
        const particlesGeometry = new BufferGeometry();
        const particlesCount = 5000;
        const particlesPositionArray = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
            particlesPositionArray[i] = (Math.random() - .5) * 5;
        }
        particlesGeometry.setAttribute("position", new BufferAttribute(particlesPositionArray, 3));

        // Materials

        const sphereMaterial = new PointsMaterial({size: 0.005, color: torusColor});

        const particleTexture = textureLoader.load("./asterisk.png");
        const particlesMaterial = new PointsMaterial({
            size: 0.01,
            map: particleTexture,
            transparent: true,
            color: particlesColor,
        });

        // Meshes

        const sphereMesh = new Points(sphereGeometry, sphereMaterial);
        const particlesMesh = new Points(particlesGeometry, particlesMaterial);

        scene.add(sphereMesh, particlesMesh);

        // Lights
        const pointLight = new PointLight(0xffffff, 0.1);
        pointLight.position.x = 2;
        pointLight.position.y = 3;
        pointLight.position.z = 4;
        scene.add(pointLight);

        // Sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        // Mouse
        const mouse = {
            x: 0,
            y: 0,
            scroll: 0,
        };

        // Base camera
        const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 2;
        scene.add(camera);


        // Renderes
        const renderer = new WebGLRenderer({
            canvas: canvasRef.current,
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(new Color(backgroundColor), 1);

        const composer = new EffectComposer(renderer)

        const renderPass = new RenderPass(scene, camera)
        const glitchPass = new GlitchPass(1)
        const bokehPass = new BokehPass(scene, camera, {
            focus: 0.01,
            aperture: 0.00001,
            maxblur: 0.5,

            width: sizes.width,
            height: sizes.height
        })

        composer.addPass(renderPass)
        composer.addPass(glitchPass)
        composer.addPass(bokehPass)

        setTimeout(() => {
            composer.removePass(glitchPass)
        }, 500)

        // Animation

        const clock = new Clock();

        const tick = () => {

            const elapsedTime = clock.getElapsedTime();

            const mouseDx = mouse.x - sizes.width / 2;
            const mouseDy = mouse.y - sizes.height / 2;

            // Update objects

            sphereMesh.rotation.y = .3 * elapsedTime;
            sphereMesh.rotation.x = .00005 * mouseDy
            sphereMesh.rotation.z = .00005 * mouseDx

           particlesMesh.rotation.x = (.00005 * -mouseDy) + .005 * elapsedTime;
            particlesMesh.rotation.y = .00005 * -mouseDx + .005 * elapsedTime;

            particlesMesh.position.y = .0001 * window.scrollY;

            // Render
            renderer.clear()
            composer.render();

            // Call tick again on the next frame
            window.requestAnimationFrame(tick);


        };

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const onResize = () => {
            // Update sizes
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            // Update camera
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            // Update renderer
            renderer.setSize(sizes.width, sizes.height);
            composer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener("resize", onResize);
        window.addEventListener("mousemove", onMouseMove);

        tick();

        return () => {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onMouseMove);
        };


    }, [canvasRef, isDark]);

    return {canvasRef};
};

export default useParticles;
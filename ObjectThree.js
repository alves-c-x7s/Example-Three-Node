import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Initial configuration
*/

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const rendererConfiguration = {
    antialias: true
}

const renderer = new THREE.WebGLRenderer(rendererConfiguration);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

/**
 * Load the object in the GLTF format
*/

const objectGltfName = 'assets/example.gltf';

const loader = new GLTFLoader();

const modelList = [];

loader.load(
  
    objectGltfName,
  
    (gltf) => {

        const model = gltf.scene;

        const objectScale = 100
        model.scale.set(objectScale, objectScale, objectScale);

        model.position.set(0, 0, 0);

        scene.add(model);
        modelList.push(model);

    },
    
    (whenLoading) => {
        console.log('Loading the object...');
    },

    (whenError) => {
        console.error(whenError);
    }

);

/**
 * Set camera
*/

camera.position.z = 1.5;
camera.position.y = -3;
camera.position.x = 2.8;

camera.lookAt(2.8, 50, 0);

/**
 * Add light to visualize object
*/

const pointLight = new THREE.PointLight(0xffffff, 50);

const pointLightY = 2;
let pointLightX = 2.5;
const pointLightZ = -4;
pointLight.position.set(pointLightX, pointLightZ, pointLightY);

scene.add(pointLight);

/**
 * Visualize scene
*/

function animate() {

    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    // Effect side-side of the light

    if (pointLightX > 7) pointLightX = -7;

    pointLightX += 0.05;
    pointLight.position.set(Math.abs(pointLightX), pointLightZ, pointLightY);

}

animate();
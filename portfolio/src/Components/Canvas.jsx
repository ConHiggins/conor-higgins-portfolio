// import {

//     Scene,
//     PerspectiveCamera,
//     WebGLRenderer,
//     Mesh,
//     MeshBasicMaterial,
//     FogExp2,
//     BoxGeometry,

// } from './three.module.js';
import { ReactDOM } from 'react';

import { render } from '@testing-library/react';
import * as THREE from 'three';


const Canvas = () => {

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, 480/480, 0.01, 30 );

const renderer = new THREE.WebGLRenderer();


//Pixel ratio
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( 480, 480 );

    //document.body.appendChild( renderer.domElement );
    this.mount.appendChild( renderer.domElement );

///Initialise camera away from center
camera.position.setZ(15);


///Pass scene and camera to renderer

renderer.render( scene, camera );


//Fog

scene.fog = new THREE.FogExp2(0x091211, 0.003);
renderer.setClearColor(scene.fog.color);

///Cube 

    ///Geometry 

    const cubeGeom = new THREE.BoxGeometry( 10, 10, 10, 1, 1, 1);


    ///Material 

    const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xF7EAAB, wireframe: true } );

    ///Shape 

    const cube = new THREE.Mesh( cubeGeom, cubeMaterial );


    scene.add(cube);



    document.addEventListener("mousemove", animateCube )

    let mouseY = 0;
    let mouseX = 0;
    let mouseZ = 0;
    

    function animateCube(event) {

        mouseY = event.clientY*0.0013;
        mouseX = event.clientX*0.0015;
        mouseZ = (event.clientX - event.clientY) *-0.0015;

        
    }


    function animate() {

        requestAnimationFrame( animate );


        cube.rotation.y = mouseX;
        cube.rotation.x = mouseY;
        cube.rotation.z = mouseZ;
        renderer.render( scene, camera );
    }


    animate();
    render();
    return (
        <div />
    )
    
    
}

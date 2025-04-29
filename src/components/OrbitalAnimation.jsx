import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const OrbitalAnimation = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75, // field of view
      window.innerWidth / window.innerHeight, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );
    camera.position.z = 5;
    
    // Set up renderer with transparent background
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // transparent background
    
    // Add renderer to DOM
    mountRef.current.appendChild(renderer.domElement);
    
    // Create the main orbit circle
    const orbitGeometry = new THREE.TorusGeometry(2.5, 0.015, 16, 100); // Made thinner (0.025 -> 0.015)
    const orbitMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x000000, // Black orbit
      transparent: true,
      opacity: 0.6
    });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    scene.add(orbit);
    
    // Create the first planet (blue)
    const planet1Geometry = new THREE.SphereGeometry(0.12, 32, 32);
    const planet1Material = new THREE.MeshBasicMaterial({ color: 0xdbdcff }); // Blue planet (#dbdcff)
    const planet1 = new THREE.Mesh(planet1Geometry, planet1Material);
    
    // Add black outline to the first planet
    const planet1OutlineGeometry = new THREE.SphereGeometry(0.125, 32, 32);
    const planet1OutlineMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x000000,
      side: THREE.BackSide
    });
    const planet1Outline = new THREE.Mesh(planet1OutlineGeometry, planet1OutlineMaterial);
    planet1.add(planet1Outline);
    
    scene.add(planet1);
    
    // Create the second planet (yellow)
    const planet2Geometry = new THREE.SphereGeometry(0.07, 32, 32);
    const planet2Material = new THREE.MeshBasicMaterial({ color: 0xfeffa3 }); // Yellow planet (#feffa3)
    const planet2 = new THREE.Mesh(planet2Geometry, planet2Material);
    
    // Add black outline to the second planet
    const planet2OutlineGeometry = new THREE.SphereGeometry(0.075, 32, 32);
    const planet2OutlineMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x000000,
      side: THREE.BackSide
    });
    const planet2Outline = new THREE.Mesh(planet2OutlineGeometry, planet2OutlineMaterial);
    planet2.add(planet2Outline);
    
    scene.add(planet2);
    
    // Add a third smaller planet (pastel red-pinkish)
    const planet3Geometry = new THREE.SphereGeometry(0.05, 32, 32);
    const planet3Material = new THREE.MeshBasicMaterial({ color: 0xffb6c1 }); // Pastel red-pinkish planet (#ffb6c1)
    const planet3 = new THREE.Mesh(planet3Geometry, planet3Material);
    
    // Add black outline to the third planet
    const planet3OutlineGeometry = new THREE.SphereGeometry(0.055, 32, 32);
    const planet3OutlineMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x000000,
      side: THREE.BackSide
    });
    const planet3Outline = new THREE.Mesh(planet3OutlineGeometry, planet3OutlineMaterial);
    planet3.add(planet3Outline);
    
    scene.add(planet3);
    
    // Animation variables
    let angle1 = 0;
    let angle2 = Math.PI; // Start on the opposite side
    let angle3 = Math.PI / 2; // Start at a different position
    const radius = 2.5; // Match the orbit radius
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the orbit itself
      orbit.rotation.x = Math.PI / 4; // Tilt the orbit
      orbit.rotation.y += 0.002; // Slowly rotate the entire orbit
      
      // Update planet positions
      angle1 += 0.01;
      angle2 += 0.015; // Second planet moves slightly faster
      angle3 += 0.02; // Third planet moves even faster
      
      // Position planets on the orbit
      planet1.position.x = radius * Math.cos(angle1);
      planet1.position.y = 0;
      planet1.position.z = radius * Math.sin(angle1);
      
      planet2.position.x = radius * Math.cos(angle2);
      planet2.position.y = 0;
      planet2.position.z = radius * Math.sin(angle2);
      
      planet3.position.x = radius * Math.cos(angle3);
      planet3.position.y = 0;
      planet3.position.z = radius * Math.sin(angle3);
      
      // Apply the same rotation as the orbit
      planet1.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 4);
      planet2.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 4);
      planet3.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 4);
      
      // Apply the orbit's y-rotation
      planet1.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), orbit.rotation.y);
      planet2.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), orbit.rotation.y);
      planet3.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), orbit.rotation.y);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Store the current value of the ref to avoid issues in the cleanup function
    const currentMount = mountRef.current;
    
    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement.parentElement === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      scene.remove(orbit);
      scene.remove(planet1);
      scene.remove(planet2);
      scene.remove(planet3);
      
      // Dispose geometries and materials
      orbitGeometry.dispose();
      orbitMaterial.dispose();
      planet1Geometry.dispose();
      planet1Material.dispose();
      planet2Geometry.dispose();
      planet2Material.dispose();
      planet3Geometry.dispose();
      planet3Material.dispose();
      
      renderer.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      className="orbital-animation"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default OrbitalAnimation;

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DProps {
  className?: string;
}

export const Hero3D: React.FC<Hero3DProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return; // Fallback to CSS

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    currentMount.appendChild(renderer.domElement);

    // Luxury palette materials
    const goldMat = new THREE.MeshPhysicalMaterial({
      color: 0xc5a059,
      metalness: 0.85,
      roughness: 0.25,
      clearcoat: 0.3,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });

    const cherryMat = new THREE.MeshPhysicalMaterial({
      color: 0x870a1e,
      metalness: 0.35,
      roughness: 0.45,
      clearcoat: 0.5,
    });

    const taupeWireMat = new THREE.MeshBasicMaterial({
      color: 0xc9183b,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    // 1. Primary outer thin luxury ring
    const ringGeo = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ringMesh = new THREE.Mesh(ringGeo, goldMat);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    // 2. Secondary elliptical plum ring
    const ring2Geo = new THREE.TorusGeometry(1.7, 0.015, 16, 80);
    const ring2Mesh = new THREE.Mesh(ring2Geo, taupeWireMat);
    ring2Mesh.rotation.y = Math.PI / 4;
    scene.add(ring2Mesh);

    // 3. Subtle floating celestial sculpture (geometric icosahedron)
    const icoGeo = new THREE.IcosahedronGeometry(0.7, 1);
    const icoMesh = new THREE.Mesh(icoGeo, cherryMat);
    icoMesh.position.set(1.4, -0.6, -0.8);
    scene.add(icoMesh);

    // 4. Subtle gold orbit sphere
    const sphereGeo = new THREE.SphereGeometry(0.2, 32, 32);
    const sphereMesh = new THREE.Mesh(sphereGeo, goldMat);
    sphereMesh.position.set(-1.8, 1.1, -0.5);
    scene.add(sphereMesh);

    // 5. Star/dust particles in taupe and champagne gold
    const particleCount = 45;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 8;
      posArray[i + 1] = (Math.random() - 0.5) * 8;
      posArray[i + 2] = (Math.random() - 0.5) * 4 - 1;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xd8c6b9,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff9f2, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfffaed, 2.0);
    dirLight1.position.set(4, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xab132b, 1.6);
    dirLight2.position.set(-4, -3, 2);
    scene.add(dirLight2);

    // Mouse movement parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0006;
      mouseY = (e.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!currentMount) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Gentle floating rotations
      ringMesh.rotation.z = elapsedTime * 0.15;
      ringMesh.rotation.x = Math.PI / 3 + targetY * 0.5;
      ringMesh.rotation.y = targetX * 0.5;

      ring2Mesh.rotation.x = -elapsedTime * 0.1;
      ring2Mesh.rotation.z = elapsedTime * 0.08;

      icoMesh.rotation.x = elapsedTime * 0.25;
      icoMesh.rotation.y = elapsedTime * 0.2;
      icoMesh.position.y = -0.6 + Math.sin(elapsedTime * 0.8) * 0.1;

      sphereMesh.position.x = -1.8 + Math.cos(elapsedTime * 0.6) * 0.15;
      sphereMesh.position.y = 1.1 + Math.sin(elapsedTime * 0.6) * 0.15;

      particles.rotation.y = elapsedTime * 0.02;

      camera.position.x = targetX * 1.5;
      camera.position.y = -targetY * 1.5;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      ringGeo.dispose();
      ring2Geo.dispose();
      icoGeo.dispose();
      sphereGeo.dispose();
      particleGeo.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};

"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { Mesh } from "three";
import { Float, MeshDistortMaterial, Environment, ContactShadows } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Scene() {
  const meshRef = useRef<Mesh>(null);

  useLayoutEffect(() => {
    // 3D Model Animations based on Sections
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth interaction
      }
    });

    tl.to(meshRef.current!.position, { x: 2, y: -1, z: 2 }, "about")
      .to(meshRef.current!.rotation, { y: Math.PI }, "about")
      .to(meshRef.current!.scale, { x: 0.5, y: 0.5, z: 0.5 }, "skills")
      .to(meshRef.current!.position, { x: -2, y: 0, z: 0 }, "projects")
      .to(meshRef.current!.position, { x: 0, y: 0, z: 0 }, "contact");

  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef} scale={1.2}>
          <sphereGeometry args={[1, 64, 64]} />
          {/* Glassy/Metallic Distorted Material */}
          <MeshDistortMaterial 
            color="#3b82f6" 
            speed={3} 
            distort={0.4} 
            radius={1} 
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
      
      <Environment preset="city" />
      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
    </>
  );
}

export default function Experience() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
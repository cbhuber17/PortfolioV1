import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

/* eslint react/prop-types: 0 */
const Satellite = ({ isMobile }) => {
  const satellite = useGLTF("./satellite/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2.3} />
      <spotLight
        position={[12, 12, 12]}
        angle={0.15}
        penumbra={1}
        intensity={750}
      />
      <pointLight intensity={5} />

      {/* Satellite position, smooth rotation */}
      <primitive
        object={satellite.scene}
        scale={isMobile ? 0.7 : 0.6}
        position={isMobile ? [0, -3, -2.2] : [0.6, -1.5, 0]}
        rotation={[0.1, 2.4, 0.1]}
      />
    </mesh>
  );
};

const SatelliteCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Keep state of isMobile with the useEffect hook below
  useEffect(() => {
    // Add a listener for changes to screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    // Callback to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Listen for changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader isSmall={false} />}>
        {/* Allow satellite movement, disable zoom */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI * 2}
          minPolarAngle={0}
        />
        <Satellite isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default SatelliteCanvas;

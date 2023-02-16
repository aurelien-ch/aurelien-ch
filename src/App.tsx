import { useState, useRef, useEffect } from "react";
// @ts-ignore
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import "./app.css";

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x162831,
          shininess: 60.00,
          waveHeight: 12.00,
          waveSpeed: 0.80,
          zoom: 1.10,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <div className="scroll-container">
      <div className="scroll-section" ref={vantaRef}>A</div>
      <div className="scroll-section">B</div>
      <div className="scroll-section">C</div>
    </div>
  )
};

export default App;
import React from "react";
import useParticles from "./useParticles";

const ParticlesContainer: React.FC = ({children}) => {

  const {canvasRef} = useParticles({isDark: true});

  return (
    <>
      <canvas ref={canvasRef} className="w-full h-screen fixed" />
      {children}
    </>
  )
}

export default ParticlesContainer
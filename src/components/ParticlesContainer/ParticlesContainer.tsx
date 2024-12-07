import useParticles from "./useParticles";

const ParticlesContainer = () => {
  const { canvasRef } = useParticles();

  return <canvas ref={canvasRef} className="w-full h-screen fixed" />;
};

export default ParticlesContainer;

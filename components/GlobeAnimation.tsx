import React, { useRef, useEffect } from 'react';

const GlobeAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width * 2; // for retina display
    canvas.height = height * 2;
    ctx.scale(2, 2);

    const dotColor = '#D52036';
    const dotCount = 1000;
    const dotRadius = 0.8;
    const globeRadius = Math.min(width, height) * 0.4;
    let rotation = 0;

    const dots: { x: number; y: number; z: number }[] = [];
    
    // Distribute points evenly on a sphere using Fibonacci lattice
    const phi = Math.PI * (3.0 - Math.sqrt(5.0)); // golden angle in radians

    for (let i = 0; i < dotCount; i++) {
      const y = 1 - (i / (dotCount - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y

      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      dots.push({ x, y, z });
    }

    const project = (dot: { x: number; y: number; z: number }) => {
        const perspective = 1.5;
        const projection = perspective / (perspective - dot.z);
        return {
            x: dot.x * projection * globeRadius + width / 2,
            y: dot.y * projection * globeRadius + height / 2,
            alpha: (dot.z + 1) / 2,
        };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      rotation += 0.002;

      dots.forEach(dot => {
        // Rotate around Y axis
        const rotatedX = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
        const rotatedZ = dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation);
        
        const projected = project({ x: rotatedX, y: dot.y, z: rotatedZ });
        
        ctx.beginPath();
        ctx.arc(projected.x, projected.y, dotRadius * projected.alpha * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(213, 32, 54, ${projected.alpha * 0.7})`;
        ctx.fill();
      });
    };

    let animationFrameId: number;
    const animate = () => {
        draw();
        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
        cancelAnimationFrame(animationFrameId);
    };

  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-30" />;
};

export default GlobeAnimation;
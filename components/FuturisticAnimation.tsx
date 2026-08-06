import React, { useRef, useEffect } from 'react';

const FuturisticAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles: Particle[] = [];

    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 150,
    };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    canvas.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });
     canvas.addEventListener('mouseleave', () => {
      mouse.x = width / 2;
      mouse.y = height / 2;
    });

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() * 2 - 1) * 0.5;
        this.speedY = (Math.random() * 2 - 1) * 0.5;
      }

      update() {
        if (this.x > width || this.x < 0) this.speedX *= -1;
        if (this.y > height || this.y < 0) this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particles = [];
      const numberOfParticles = (width * height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    function connect() {
        if (!ctx) return;
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let distance = Math.sqrt(
                    (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
                    (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y)
                );
                if (distance < 100) {
                    opacityValue = 1 - (distance / 100);
                    ctx.strokeStyle = `rgba(213, 32, 54, ${opacityValue})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      connect();
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
        window.removeEventListener('resize', () => {});
        if(canvas) {
            canvas.removeEventListener('mousemove', () => {});
            canvas.removeEventListener('mouseleave', () => {});
        }
    }
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default FuturisticAnimation;
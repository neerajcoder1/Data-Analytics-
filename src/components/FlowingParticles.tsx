import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  maxAlpha: number;
  decay: number;
  phase: number;
  phaseSpeed: number;
  amplitude: number;
}

interface WindLine {
  points: { x: number; y: number }[];
  speed: number;
  offset: number;
  width: number;
  opacity: number;
}

export function FlowingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const particles: Particle[] = [];
    const windLines: WindLine[] = [];
    const maxParticles = 40; // Kept low for elegance and performance
    const maxWindLines = 3;

    // Resize handler to support high-DPI displays
    const handleResize = () => {
      const container = containerRef.current;
      if (!container || !canvas) return;

      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Re-initialize elements to fit new dimensions
      initParticles();
      initWindLines();
    };

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < maxParticles; i++) {
        particles.push(createParticle(true));
      }
    };

    const createParticle = (randomizeX = false): Particle => {
      const pWidth = width || window.innerWidth;
      const pHeight = height || window.innerHeight;
      
      return {
        x: randomizeX ? Math.random() * pWidth : -20,
        y: Math.random() * pHeight,
        radius: Math.random() * 3 + 1.5, // 1.5px to 4.5px
        vx: Math.random() * 0.4 + 0.2,   // Slow horizontal drift
        vy: Math.random() * 0.1 - 0.05,  // Very slight vertical drift
        alpha: randomizeX ? Math.random() * 0.3 : 0,
        maxAlpha: Math.random() * 0.25 + 0.05, // Subtle max opacities
        decay: Math.random() * 0.005 + 0.002,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: Math.random() * 0.01 + 0.005,
        amplitude: Math.random() * 15 + 5, // Wave movement
      };
    };

    const initWindLines = () => {
      windLines.length = 0;
      for (let i = 0; i < maxWindLines; i++) {
        windLines.push(createWindLine(i));
      }
    };

    const createWindLine = (index: number): WindLine => {
      const pHeight = height || window.innerHeight;
      const pWidth = width || window.innerWidth;
      
      const numPoints = 6;
      const points = [];
      const segmentWidth = (pWidth + 100) / (numPoints - 1);
      const baseHeight = (pHeight * 0.25) + (index * (pHeight * 0.25)) + (Math.random() * 50 - 25);

      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: -50 + i * segmentWidth,
          y: baseHeight + Math.sin(i) * 30,
        });
      }

      return {
        points,
        speed: Math.random() * 0.5 + 0.2,
        offset: Math.random() * Math.PI * 2,
        width: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.08 + 0.03, // Extremely faint
      };
    };

    // Initialize resize observer
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Initial sizing
    handleResize();

    let lastTime = 0;
    const animate = (time: number) => {
      if (!ctx || width === 0 || height === 0) return;

      const delta = lastTime ? (time - lastTime) / 16.66 : 1;
      lastTime = time;

      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // 1. Draw wind lines (flowing currents)
      windLines.forEach((line) => {
        line.offset += 0.002 * delta;

        ctx.beginPath();
        ctx.lineWidth = line.width;
        ctx.strokeStyle = `rgba(148, 163, 184, ${line.opacity})`; // slate-400
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const p0 = line.points[0];
        ctx.moveTo(p0.x, p0.y + Math.sin(line.offset) * 25);

        for (let i = 1; i < line.points.length - 1; i++) {
          const xc = (line.points[i].x + line.points[i + 1].x) / 2;
          const yc = (line.points[i].y + Math.sin(line.offset + i * 0.5) * 25 + line.points[i + 1].y + Math.sin(line.offset + (i + 1) * 0.5) * 25) / 2;
          ctx.quadraticCurveTo(line.points[i].x, line.points[i].y + Math.sin(line.offset + i * 0.5) * 25, xc, yc);
        }

        ctx.stroke();
      });

      // 2. Draw and update particles
      particles.forEach((p, index) => {
        // Update positions
        p.x += p.vx * delta;
        p.phase += p.phaseSpeed * delta;
        
        // Dynamic smooth wavy movement
        const currentY = p.y + Math.sin(p.phase) * p.amplitude * 0.1;

        // Fade in/out logic to prevent harsh borders
        if (p.x < width * 0.1) {
          // Fade in at left edge
          p.alpha = Math.min(p.maxAlpha, p.alpha + p.decay * 2 * delta);
        } else if (p.x > width * 0.85) {
          // Fade out at right edge
          p.alpha = Math.max(0, p.alpha - p.decay * 3 * delta);
        } else if (p.alpha < p.maxAlpha) {
          p.alpha = Math.min(p.maxAlpha, p.alpha + p.decay * delta);
        }

        // Draw particle
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, currentY, 0, p.x, currentY, p.radius);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${p.alpha * 1.5})`);
        gradient.addColorStop(0.3, `rgba(186, 230, 253, ${p.alpha})`); // soft sky blue glow
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, currentY, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Recycle particle if off-screen or faded completely
        if (p.x > width + 20 || (p.x > width * 0.85 && p.alpha <= 0)) {
          particles[index] = createParticle(false);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
      id="flowing-particles-container"
    >
      {/* Subtle slowly rotating gradient spots for atmospheric depth */}
      <div 
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-radial from-sky-100/30 to-transparent blur-3xl animate-pulse"
        style={{ animationDuration: '12s' }}
        id="bg-ambient-spot-1"
      />
      <div 
        className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-radial from-teal-50/20 to-transparent blur-3xl animate-pulse"
        style={{ animationDuration: '18s', animationDelay: '3s' }}
        id="bg-ambient-spot-2"
      />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full bg-radial from-white/40 to-transparent blur-3xl animate-pulse"
        style={{ animationDuration: '15s', animationDelay: '1.5s' }}
        id="bg-ambient-spot-3"
      />

      {/* Floating particles and wind curves */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-70 mix-blend-screen"
        id="ambient-flow-canvas"
      />
    </div>
  );
}

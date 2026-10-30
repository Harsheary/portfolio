"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useMemo, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waveColors = useMemo(
    () =>
      colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
    [colors],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const noise = createNoise3D();
    const animationSpeed = speed === "fast" ? 0.002 : 0.001;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let width = 0;
    let height = 0;
    let noiseTime = 0;
    let animationId = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      context.filter = `blur(${blur}px)`;
    };

    const draw = () => {
      context.fillStyle = backgroundFill || "black";
      context.globalAlpha = waveOpacity;
      context.fillRect(0, 0, width, height);
      noiseTime += animationSpeed;

      for (let wave = 0; wave < 5; wave += 1) {
        context.beginPath();
        context.lineWidth = waveWidth || 50;
        context.strokeStyle = waveColors[wave % waveColors.length];
        for (let x = 0; x < width; x += 5) {
          const y = noise(x / 800, 0.3 * wave, noiseTime) * 100;
          context.lineTo(x, y + height * 0.5);
        }
        context.stroke();
        context.closePath();
      }

      if (!reducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [
    backgroundFill,
    blur,
    speed,
    waveColors,
    waveOpacity,
    waveWidth,
  ]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

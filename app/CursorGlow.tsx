"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"
      style={{
        left: `${position.x - 80}px`,
        top: `${position.y - 80}px`,
      }}
    />
  );
}
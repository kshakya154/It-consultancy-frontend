import React, { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-16 h-16 bg-black rounded-full pointer-events-none mix-blend-difference z-[9999] transition-transform duration-150"
      style={{
        transform: `translate(${pos.x - 32}px, ${pos.y - 32}px)`,
      }}
    />
  );
}

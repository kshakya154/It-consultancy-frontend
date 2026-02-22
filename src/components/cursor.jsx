import React,{ useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const move = (e) => {
      requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${e.clientX - 8}px, ${
          e.clientY - 8
        }px, 0)`;
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-[9999] shadow-[0_0_20px_rgba(37,99,235,0.7)]"
    />
  );
}
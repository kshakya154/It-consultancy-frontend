// ServiceCard.jsx
import React from "react";

export default function ServiceCard({ icon, title, bgColor }) {
  return (
    <div
      className="rounded-xl p-6 text-center text-white w-full h-full"
      style={{ background: bgColor }}
    >
      <img src={icon} alt={title} className="mx-auto h-24 mb-6" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

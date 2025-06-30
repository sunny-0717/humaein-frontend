"use client";
import React, { useRef, useState } from "react";

export const CardContainer = ({ children, className }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsHovered(false);
    containerRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-200 ease-out ${className || ""}`}
    >
      {children}
    </div>
  );
};

export const CardBody = ({ children, className }) => {
  return (
    <div className={`${className || ""}`}>
      {children}
    </div>
  );
};

export const CardItem = ({ as: Component = "div", children, className, translateZ = 0, ...props }) => {
  return (
    <Component
      className={`${className || ""}`}
      style={{
        transform: `translateZ(${translateZ}px)`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}; 
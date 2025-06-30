"use client";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`relative h-full w-full bg-white dark:bg-black ${containerClassName || ""}`}
    >
      <div
        className={`group/card relative h-full w-full rounded-xl border border-black/[0.1] bg-white dark:border-white/[0.2] dark:bg-black ${className || ""}`}
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(29, 78, 216, 0.15), transparent 40%)",
        }}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/card:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(29, 78, 216, 0.1), transparent 40%)",
          }}
        />
        {children}
      </div>
    </div>
  );
}; 
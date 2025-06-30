"use client";
import React from "react";

export const HoverEffect = ({ items, className }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ${className || ""}`}>
      {items.map((item, idx) => (
        <div
          key={item.link}
          className="relative group block p-2 h-full w-full"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative px-4 py-4 bg-white dark:bg-black rounded-lg leading-none flex items-top justify-between space-x-8">
            <div className="space-y-2">
              <p className="text-slate-800 dark:text-slate-200 font-bold text-lg">
                {item.title}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {item.description}
              </p>
            </div>
            <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 
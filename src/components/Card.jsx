import React from 'react';

export default function Card({
  children,
  hover = true,
  className = '',
  ...props
}) {
  return (
    <div
      className={`bg-gray-700 rounded-lg shadow-lg ${
        hover ? 'hover:shadow-2xl hover:scale-105 transition-all duration-300' : ''
      } p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

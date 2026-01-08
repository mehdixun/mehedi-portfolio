import React from 'react';

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  asChild = false,
  ...props
}) {
  const baseClasses = 'font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white shadow-md',
    success: 'bg-green-600 hover:bg-green-700 text-white shadow-lg',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asChild) {
    return React.cloneElement(children, {
      className: combinedClasses,
      ...props,
    });
  }

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}

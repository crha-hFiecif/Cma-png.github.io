import React from 'react';
import Link from 'next/link';

type BadgeColor = 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink';

interface BadgeProps {
  text: string;
  color: BadgeColor;
  href?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color, href }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-transparent hover:text-blue-800 hover:dark:text-blue-300 hover:border-dashed hover:border-2 hover:border-blue-800 hover:dark:border-blue-300 transition-all duration-300',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-transparent hover:text-gray-800 hover:dark:text-gray-300 hover:border-dashed hover:border-2 hover:border-gray-800 hover:dark:border-gray-300 transition-all duration-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 hover:bg-transparent hover:text-red-800 hover:dark:text-red-300 hover:border-dashed hover:border-2 hover:border-red-800 hover:dark:border-red-300 transition-all duration-300',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-transparent hover:text-green-800 hover:dark:text-green-300 hover:border-dashed hover:border-2 hover:border-green-800 hover:dark:border-green-300 transition-all duration-300',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 hover:bg-transparent hover:text-yellow-800 hover:dark:text-yellow-300 hover:border-dashed hover:border-2 hover:border-yellow-800 hover:dark:border-yellow-300 transition-all duration-300',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 hover:bg-transparent hover:text-indigo-800 hover:dark:text-indigo-300 hover:border-dashed hover:border-2 hover:border-indigo-800 hover:dark:border-indigo-300 transition-all duration-300',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 hover:bg-transparent hover:text-purple-800 hover:dark:text-purple-300 hover:border-dashed hover:border-2 hover:border-purple-800 hover:dark:border-purple-300 transition-all duration-300',
    pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300 hover:bg-transparent hover:text-pink-800 hover:dark:text-pink-300 hover:border-dashed hover:border-2 hover:border-pink-800 hover:dark:border-pink-300 transition-all duration-300',
  };

  const badge = (
    <span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${colorClasses[color]}`}
    >
      {text}
    </span>
  );

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {badge}
    </Link>
  ) : (
    badge
  );
};

export default Badge;
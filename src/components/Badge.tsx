import React from 'react';
import Link from 'next/link';

type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

interface BadgeProps {
  text: string;
  color: BadgeColor;
  href?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color, href }) => {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary-light hover:bg-primary/20 border-primary/20',
    secondary: 'bg-secondary/10 text-secondary-light hover:bg-secondary/20 border-secondary/20',
    success: 'bg-green-900/10 text-green-400 hover:bg-green-900/20 border-green-900/20',
    warning: 'bg-yellow-900/10 text-yellow-400 hover:bg-yellow-900/20 border-yellow-900/20',
    error: 'bg-red-900/10 text-red-400 hover:bg-red-900/20 border-red-900/20',
    info: 'bg-blue-900/10 text-blue-400 hover:bg-blue-900/20 border-blue-900/20',
  };

  const badge = (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors duration-300 ${colorClasses[color]}`}
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
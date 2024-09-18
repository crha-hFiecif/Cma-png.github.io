import React from 'react';

interface HoverableIconProps {
  icon: React.ElementType;
  href: string;
}

const HoverableIcon: React.FC<HoverableIconProps> = ({ icon: Icon, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="relative inline-block">
      <Icon className="text-gray-500 hover:text-gray-700 duration-300" />
      <span className="absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md bg-gray-500 opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
    </a>
  );
};

export default HoverableIcon;
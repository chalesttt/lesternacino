
import React from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const Tag = ({ children, className }: TagProps) => {
  return (
    <span className={cn("inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-dark-300 text-gray-200 mr-2 mb-2 transition-colors hover:bg-dark-400", className)}>
      {children}
    </span>
  );
};

export default Tag;

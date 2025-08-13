import React from 'react';

export interface ToolbarProps {
  chidren: React.ReactNode;
  action?: React.ReactNode;
}

export default function Toolbar({ chidren, action }: ToolbarProps) {
  return (
    <div className="flex items-center gap-7 py-8 px-10">
      <div className="flex-1">{chidren}</div>
      {action}
    </div>
  );
}

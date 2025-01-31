import React from 'react';

interface NotificationBadgeProps {
  count: number;
  // Optional position classes if you need to adjust positioning
  position?: string;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ 
  count, 
  position = 'top-0 right-0' 
}) => {
  if (count === 0) return null;

  return (
    <div
      className={`absolute ${position} inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-white transform -translate-y-1/2 translate-x-1/2 bg-red-500 rounded-full`}
    >
      {count > 99 ? '99+' : count}
      <span className="sr-only">unread notifications</span>
    </div>
  );
};

export default NotificationBadge;
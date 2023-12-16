
import React, { ReactNode } from 'react';

interface ReusableComponentProps {
  children: ReactNode;
}

const ReusableComponent: React.FC<ReusableComponentProps> = ({ children }) => {
  return (
    <div className="mx-auto py-10 px-20 border rounded-md w-[1200px]">
      {children}
    </div>
  );
};

export default ReusableComponent;

'use client'

import React, { createContext, useContext, ReactNode } from 'react';

export type Device = string;

type DeviceContextType = {
  device: Device;
};

// 초기값 설정
const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

// Provider 컴포넌트 생성
export const DeviceProvider = ({
                                 children,
                                 initialDevice,
                               }: {
  children: ReactNode;
  initialDevice: Device;
}) => {
  const [currentDevice, setCurrentDevice] = React.useState<Device>(initialDevice);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCurrentDevice('mobile');
      } else {
        setCurrentDevice('desktop');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DeviceContext.Provider value={{ device: currentDevice }}>
      {children}
    </DeviceContext.Provider>
  );
};

// Custom hook 생성
export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }
  return context;
};

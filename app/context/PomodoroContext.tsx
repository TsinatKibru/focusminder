// context/PomodoroContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PomodoroContextProps {
  pomodoroTime: number;
  setPomodoroTime: (time: number) => void;
}

const PomodoroContext = createContext<PomodoroContextProps | undefined>(undefined);

export const PomodoroProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pomodoroTime, setPomodoroTime] = useState<number>(25); // default 25 minutes

  return (
    <PomodoroContext.Provider value={{ pomodoroTime, setPomodoroTime }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export const usePomodoro = (): PomodoroContextProps => {
  const context = useContext(PomodoroContext);
  if (context === undefined) {
    throw new Error("usePomodoro must be used within a PomodoroProvider");
  }
  return context;
};

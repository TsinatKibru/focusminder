import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface CategoriesContextType {
  categories: string[];
  setCategories: Dispatch<SetStateAction<string[]>>;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

export const CategoriesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <CategoriesContext.Provider value={{ categories, setCategories, selectedCategory, setSelectedCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
};

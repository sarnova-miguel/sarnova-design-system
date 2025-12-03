'use client';

import { createContext, useState, useContext } from "react";

interface BrandContextType {
  brand: string;
  updateBrand: (brand: string) => void;
}

interface BrandProviderProps {
  children: React.ReactNode;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider = ({ children }: BrandProviderProps) => {
    const [brand, setBrand] = useState<'all' | 'bt' | 'ta' | 'cp' | 'dt'>('all');

    const updateBrand = (brand: string) => {
        setBrand((brand as 'all' | 'bt' | 'ta' | 'cp' | 'dt'));
    };

    return (
        <BrandContext.Provider value={{ brand, updateBrand }}>
            {children}
        </BrandContext.Provider>
    );
}

export const useBrand = () => {
    const context = useContext(BrandContext);
    if (!context) {
        throw new Error('useBrand must be used within a BrandProvider');
    }
    return context;
}
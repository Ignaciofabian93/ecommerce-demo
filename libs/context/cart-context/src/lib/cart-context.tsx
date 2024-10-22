'use client';
import { createContext, ReactNode } from 'react';

export type CartContextProps = {
  products: [];
  totalPrice: number;
};

export const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContext.Provider value={{ products: [], totalPrice: 0 }}>
      {children}
    </CartContext.Provider>
  );
};

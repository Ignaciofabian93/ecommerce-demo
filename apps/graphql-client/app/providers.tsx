import { CartProvider } from '@graphql-client/cart-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

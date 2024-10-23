'use client';
import { CartProvider } from '@graphql-client/cart-context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <CartProvider>{children}</CartProvider>
    </ApolloProvider>
  );
}

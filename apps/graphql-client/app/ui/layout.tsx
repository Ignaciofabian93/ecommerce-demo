import { Footer } from '@graphql-client/footer';
import { Navigation } from '@graphql-client/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="layout">
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}

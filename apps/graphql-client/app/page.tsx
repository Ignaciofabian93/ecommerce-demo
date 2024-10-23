'use client';
import { Hero } from '@graphql-client/hero';
import { Categories } from '@graphql-client/categories';
import Layout from './ui/layout';

export default function Page() {
  return (
    <Layout>
      <Hero />
      <Categories />
    </Layout>
  );
}

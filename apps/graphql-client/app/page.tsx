'use client';
import { Button } from '@graphql-client/button';
import { Navigation } from '@graphql-client/navigation';
import { ProductCard } from '@graphql-client/product-card';
import { Hero } from '@graphql-client/hero';

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      {/* <ProductCard>
        <ProductCard.Image
          src={
            'https://briansguitars.com/cdn/shop/products/DSC_1028_cc78aa2c-287d-4dcf-864e-fab1b548d63b_1024x.jpg?v=1603269009'
          }
          alt="guitar"
        />
        <ProductCard.Title>PRS SE Custom 24</ProductCard.Title>
        <ProductCard.Price>680.000</ProductCard.Price>
        <ProductCard.Actions
          primaryText="Add"
          primary={() => console.log('1st')}
          secondary={() => console.log('2nd')}
          secondaryText="More"
        />
      </ProductCard> */}
    </main>
  );
}

import { CategoryCard } from './category-card';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '@graphql-client/graphql';
import { Category } from '@graphql-client/types';
import styles from './categories.module.css';

export function Categories() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  console.log(loading, error, data);

  return (
    <div className={styles['container']}>
      {data &&
        data.categories.length &&
        data.categories.map((c: Category) => (
          <CategoryCard
            key={c.id}
            src={`/images${c.image_url}`}
            alt={c.name}
            width={400}
            height={200}
            href={c.image_url}
          >
            <CategoryCard.Title title={c.name} />
          </CategoryCard>
        ))}
    </div>
  );
}

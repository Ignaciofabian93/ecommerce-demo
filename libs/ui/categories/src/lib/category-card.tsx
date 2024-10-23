import Image, { ImageProps } from 'next/image';
import styles from './categories.module.css';
import Link from 'next/link';

export function CategoryCard({
  children,
  src,
  alt,
  width,
  height,
  href,
}: { children: React.ReactNode; href: string } & ImageProps) {
  return (
    <Link href={href} className={styles['category-card']}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles['img']}
        loading="eager"
        layout="responsive"
        fetchPriority="high"
      />
      {children}
    </Link>
  );
}

CategoryCard.Title = function ({ title }: { title: string }) {
  return <h3 className={styles['title']}>{title}</h3>;
};

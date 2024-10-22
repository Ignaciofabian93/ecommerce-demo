import styles from './product-card.module.css';
import Image, { ImageProps } from 'next/image';

export function ProductCard({ children }: { children: React.ReactNode }) {
  return <div className={styles['container']}>{children}</div>;
}

ProductCard.Title = function CardTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className={styles['title']}>{children}</h2>;
};

ProductCard.Image = function CardImage({ src, alt }: ImageProps) {
  return (
    <div className={styles['img-container']}>
      <Image
        className={styles['img']}
        src={src}
        alt={alt}
        width={200}
        height={200}
      />
    </div>
  );
};

ProductCard.Price = function CardPrice({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className={styles['price']}>{children} CLP</p>;
};

ProductCard.Actions = function CardActions({
  primary,
  primaryText,
  secondary,
  secondaryText,
}: {
  primary: () => void;
  secondary: () => void;
  primaryText: string;
  secondaryText: string;
}) {
  return (
    <div className={styles['actions']}>
      <button className={styles['secondary-button']} onClick={secondary}>
        {secondaryText}
      </button>
      <button className={styles['primary-button']} onClick={primary}>
        {primaryText}
      </button>
    </div>
  );
};

export default ProductCard;

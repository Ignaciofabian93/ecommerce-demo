import styles from './navigation.module.css';
import { HomeIcon, CartIcon, UserIcon } from '@graphql-client/icons';
import { Search } from '@graphql-client/search';

export function Navigation() {
  return (
    <nav className={styles['container']}>
      <div className={styles['left']}>
        <div className={styles['menu-icon']}>
          <HomeIcon />
        </div>
        <h1 className={styles['title']}>Guitar Store</h1>
      </div>
      <div className={styles['search-container']}>
        <Search />
      </div>
      <ul className={styles['right']}>
        <li>
          <CartIcon />
        </li>
        <li>
          <UserIcon />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

import styles from './search.module.css';

export function Search() {
  return (
    <div className={styles['container']}>
      <input
        className={styles['input']}
        type="search"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;

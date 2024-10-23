'use client';
import { useState } from 'react';
import styles from './search.module.css';

export function Search() {
  const [searchedText, setSearchedText] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchedText(value);
  };

  return (
    <div className={styles['container']}>
      <input
        className={styles['input']}
        type="search"
        placeholder="Search..."
        onChange={handleSearch}
        value={searchedText}
      />
    </div>
  );
}

export default Search;

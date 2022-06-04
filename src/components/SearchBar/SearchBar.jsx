import React from "react";
import PropTypes from "prop-types";
import styles from "../SearchBar/SearchBar.module.css";

export default function Searchbar({ onSubmit, onChange, query }) {
  return (
    <form onSubmit={onSubmit} className={styles.searchForm}>
      <input
        className={styles.searchFormInput}
        type="text"
        value={query}
        placeholder="Search movies"
        onChange={onChange}
      />

      <button type="submit" className={styles.button}>
        <span>Search</span>
      </button>
    </form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

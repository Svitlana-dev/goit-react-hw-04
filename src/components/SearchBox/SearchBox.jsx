import css from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

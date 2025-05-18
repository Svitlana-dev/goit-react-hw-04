import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ imagesCount, onClick }) {
  if (imagesCount === 0) {
    return null;
  }

  return (
    <button type="button" className={css.button} onClick={onClick}>
      Load more
    </button>
  );
}

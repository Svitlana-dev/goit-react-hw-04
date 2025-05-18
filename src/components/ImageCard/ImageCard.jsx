import css from './ImageCard.module.css';

export default function ImageCard({ src, alt, onClick }) {
  return (
    <div className={css.card} onClick={onClick}>
      <img src={src} alt={alt} className={css.image} />
    </div>
  );
}

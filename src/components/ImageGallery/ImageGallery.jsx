import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.item}>
          <ImageCard
            src={image.url}
            alt={image.description}
            onClick={() => onImageClick(image)}
          />
        </li>
      ))}
    </ul>
  );
}

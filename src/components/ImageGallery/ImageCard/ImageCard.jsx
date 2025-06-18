import css from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
  return (
    <div onClick={() => onClick(image)}>
      <img
        className={css.link}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

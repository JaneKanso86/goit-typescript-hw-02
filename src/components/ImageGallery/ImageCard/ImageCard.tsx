import css from './ImageCard.module.css';
import { ImageData } from '../../types';

interface Props {
  image: ImageData;
  onClick: (image: ImageData) => void;
}

export default function ImageCard({ image, onClick }: Props) {
  return (
    <div onClick={() => onClick(image)}>
      <img
        className={css.link}
        src={image.urls.small}
        alt={image.alt_description ?? 'Image'}
      />
    </div>
  );
}

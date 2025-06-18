Modal.setAppElement('#root');

import Modal from 'react-modal';
import { ImageData } from '../../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  image: ImageData;
}

export default function ImageModal({ isOpen, onClose, image }: Props) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <img src={image.largeImageURL} alt={image.altText} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

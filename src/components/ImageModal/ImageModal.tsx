import Modal from 'react-modal';
import { ImageData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  image: ImageData;
}
Modal.setAppElement('#root');
export default function ImageModal({ isOpen, onClose, image }: Props) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <img src={image.urls.regular} alt={image.alt_description ?? 'Image'} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

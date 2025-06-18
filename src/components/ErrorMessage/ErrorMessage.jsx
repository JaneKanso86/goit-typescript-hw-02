import css from '../ErrorMessage/ErrorMessage.module.css';

export default function ErrorMessage({ message }) {
  return <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>;
}

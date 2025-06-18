import css from '../ErrorMessage/ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({
  message,
}: ErrorMessageProps): JSX.Element {
  return <p className={css.error}>{message}</p>;
}

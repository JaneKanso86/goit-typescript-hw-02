import css from './LoadMoreBtn.module.css';

type Props = {
  onClick: () => void;
};
export default function LoadMoreBtn({ onClick }: Props) {
  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

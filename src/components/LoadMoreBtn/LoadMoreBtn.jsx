import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={onClick}>Load more</button>
    </div>
  );
}

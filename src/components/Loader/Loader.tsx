import { FC } from 'react';
import { ClipLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader: FC = () => {
  return (
    <div className={css.wrapper}>
      <ClipLoader color="#0E0F0E" />
    </div>
  );
};

export default Loader;

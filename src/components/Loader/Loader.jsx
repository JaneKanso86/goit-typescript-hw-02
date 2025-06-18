import css from './Loader.module.css';

import { ClipLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <ClipLoader color="#0E0F0E" />
    </div>
  );
}

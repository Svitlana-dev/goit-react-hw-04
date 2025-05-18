import css from './Loader.module.css';
import { DotLoader } from 'react-spinners';

export default function Loader({ loading }) {
  return (
    <div className={css.load}>
      <DotLoader
        loading={loading}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

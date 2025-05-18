import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <p className={css.name}>
          <FaUser />
          {name}
        </p>

        <p className={css.number}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

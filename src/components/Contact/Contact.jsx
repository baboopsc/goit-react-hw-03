import css from './Contact.module.css';

export default function Contact({ name, number, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p className={css.row}>Name: {name}</p>
        <p className={css.row}>Number: {number}</p>
      </div>

      <button type="button" className={css.btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

// contactlist componentine
//  kiSi listesini props olarak gönderiyorum ve burada map ile listeliyorum.
//sadece listeyi donecegim icin sadece contacts propsunu aliyorum

import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <Contact name={name} number={number} onDelete={() => onDelete(id)} />
        </li>
      ))}
    </ul>
  );
}

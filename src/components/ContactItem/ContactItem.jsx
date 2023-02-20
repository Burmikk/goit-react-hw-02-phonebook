import styles from './contactItem.module.scss';
const ContactItem = ({ name, number, removeItem }) => (
  <li className={styles.item}>
    <p className={styles.name}>{name}</p>
    <p className={styles.number}>{number}</p>
    <button className={styles.btn} onClick={() => removeItem(name)}>
      Delete
    </button>
  </li>
);

export default ContactItem;

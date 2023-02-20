import styles from './contactList.module.scss';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ filterSearch, remove }) => {
  const list = filterSearch.map(({ id, name, number }) => (
    <ContactItem key={id} name={name} number={number} removeItem={remove} />
  ));

  return <ul className={styles.list}>{list}</ul>;
};

export default ContactList;

import styles from './filter.module.scss';
import PropTypes from 'prop-types';

const Filter = ({ filter }) => (
  <div className={styles.filter}>
    <h3 className={styles.title}>Find contact by name</h3>
    <input
      className={styles.input}
      type="text"
      name="filter"
      onChange={filter}
    />
  </div>
);

Filter.proprTypes = {
  filter: PropTypes.number.isRequired,
};
export default Filter;

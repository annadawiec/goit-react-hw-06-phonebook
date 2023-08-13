import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(setFilter(e.target.value));
  return (
    <label className={css.label_filter}>
      <input
        className={css.input_filter}
        type="text"
        name="filter"
        onChange={handleFilterChange}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChanget: PropTypes.func.isRequired,
};

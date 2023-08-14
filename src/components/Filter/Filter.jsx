import css from './Filter.module.css';

export const Filter = ({ filter, changeFilterInput }) => {
  return (
    <label className={css.label_filter}>
      <input
        className={css.input_filter}
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilterInput}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

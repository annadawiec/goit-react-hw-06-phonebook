import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

export const ContactForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');

    dispatch(addContact({ name, number }));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        pattern="^[a-zA-Za]+(([' \-][a-zA-Za])?[a-zA-Za]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <input
        className={css.input}
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="Number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button className={css.button_add} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, setFilter } from 'redux/actions';

export const App = () => {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState([]);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.some(
      i => i.name.toLowerCase() === name.toLowerCase() || i.number === number
    )
      ? alert(`Contact with name ${name} or ${number} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const findContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <section>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilterInput={handleFilterChange} />
      <ContactList
        contacts={findContacts()}
        deleteContact={handleDeleteContact}
      />
    </section>
  );
};

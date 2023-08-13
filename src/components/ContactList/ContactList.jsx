import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list_contact}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item_contact}>
          <p className={css.name_contact}>
            {name}: {number}
          </p>
          <button
            className={css.button_delete}
            type="button"
            onClick={() => handleDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
// import PropTypes from 'prop-types';
// import css from './ContactList.module.css';

// export const ContactList = ({ contacts, deleteContact }) => (
//   <ul className={css.list_contact}>
//     {contacts.map(({ id, name, number }) => {
//       return (
//         <li key={id} className={css.item_contact}>
//           <p className={css.name_contact}>
//             {name}: {number}
//           </p>
//           <button
//             className={css.button_delete}
//             type="button"
//             onClick={() => deleteContact(id)}
//           >
//             Delete
//           </button>
//         </li>
//       );
//     })}
//   </ul>
// );

// ContactList.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
//   id: PropTypes.string,
//   deleteContact: PropTypes.func.isRequired,
// };

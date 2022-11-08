import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsItem,
  RemoveContactButton,
} from './Phonebook.styled';
import { IconContext } from 'react-icons';
import { RiDeleteBack2Line } from 'react-icons/ri';

export default function ContactList({ contacts, removeContact }) {
  const elements = contacts.map(({ name, number, id }) => {
    return (
      <ContactsItem key={id}>
        &#128578; {name}: {number}
        <RemoveContactButton onClick={() => removeContact(id)}>
          <IconContext.Provider value={{ color: '#1abc9c', size: '25px' }}>
            <RiDeleteBack2Line />
          </IconContext.Provider>
        </RemoveContactButton>
      </ContactsItem>
    );
  });
  return <ContactsList>{elements}</ContactsList>;
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};

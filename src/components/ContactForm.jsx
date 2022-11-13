import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  InputWrapper,
  Input,
  Label,
  AddContactButton,
  PhonebookTitle,
  PhonebookContainer,
} from './Phonebook.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';
// import { addContact } from 'redux/contacts/contacts-slice';
import { addContact } from 'redux/contacts/contacts-operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addPhoneContact = contact => {
    if (isDuplicate(contact)) {
      toast.warn(`${contact.name} is already in contacts`);
      return;
    }

    toast('Contact added');
    const action = addContact(contact);
    dispatch(action);
    setName('');
    setNumber('');
  };

  const isDuplicate = ({ name }) => {
    const result = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    return result;
  };

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    addPhoneContact({ name, number });
  };

  return (
    <PhonebookContainer>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor={nameId}>Name</Label>
          <Input
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor={numberId}>Number</Label>
          <Input
            id={numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={event => setNumber(event.target.value)}
          />
        </InputWrapper>
        <AddContactButton type="submit">Add contact</AddContactButton>
      </form>
    </PhonebookContainer>
  );
}

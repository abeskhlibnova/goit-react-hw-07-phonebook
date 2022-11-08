import ContactForm from './ContactForm';
import ContactList from './ContactList ';
import Filter from './Filter';
import { ContactsTitle, Form, ContactFilterForm } from './Phonebook.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { addContact, removeContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Phonebook() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addPhoneContact = contact => {
    if (isDuplicate(contact)) {
      toast.warn(`${contact.name} is already in contacts`);
      return;
    }
    toast('Contact added');
    const action = addContact(contact);
    dispatch(action);
  };

  const removePhoneContact = id => {
    toast.success('Contact removed');
    const action = removeContact(id);
    dispatch(action);
  };

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const isDuplicate = ({ name }) => {
    const result = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    return result;
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter);
      return result;
    });
    return filteredContacts;
  };

  return (
    <Form>
      <ContactForm onSubmit={addPhoneContact} />
      <ContactFilterForm>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter filter={filter} handleChange={handleChange} />
        <ContactList
          contacts={getFilteredContacts()}
          removeContact={removePhoneContact}
        />
      </ContactFilterForm>
    </Form>
  );
}

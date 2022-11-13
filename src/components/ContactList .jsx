import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import {
  ContactsList,
  ContactsItem,
  RemoveContactButton,
} from './Phonebook.styled';
import { IconContext } from 'react-icons';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { getFilter } from 'redux/filter/filter-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const removePhoneContact = id => {
    toast.success('Contact removed');
    const action = deleteContact(id);
    dispatch(action);
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
  const filteredContacts = getFilteredContacts();

  const elements = filteredContacts.map(({ name, number, id }) => {
    return (
      <ContactsItem key={id}>
        &#128578; {name}: {number}
        <RemoveContactButton onClick={() => removePhoneContact(id)}>
          <IconContext.Provider value={{ color: '#1abc9c', size: '25px' }}>
            <RiDeleteBack2Line />
          </IconContext.Provider>
        </RemoveContactButton>
      </ContactsItem>
    );
  });
  return <ContactsList>{elements}</ContactsList>;
}
